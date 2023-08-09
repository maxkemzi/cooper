import {UserService, RefreshTokenService} from "../../common/database";
import {TokenVerificator} from "../../common/auth";
import {ErrorThrower} from "../../common/error";
import {PasswordComparer, PasswordHasher} from "./lib/password";
import {TokenGenerator} from "./lib/token";
import {
	ActivationLinkGenerator,
	ActivationLinkSender
} from "./lib/activationLink";

class AuthService {
	static async signUp({email, username, password}) {
		await this.#handleUserAlreadyExists(email, username);

		const user = await this.#createUserForSignup({email, username, password});

		await ActivationLinkSender.sendToEmail(user.activationLink, email);

		const tokens = await this.#createTokensForUser(user);

		return {tokens, user};
	}

	static async #handleUserAlreadyExists(email, username) {
		const [userWithEmailExists, userWithUsernameExists] = await Promise.all([
			UserService.exists({email}),
			UserService.exists({username})
		]);

		if (userWithEmailExists) {
			ErrorThrower.throwBadRequest(
				`A user with an email address of ${email} is already exists.`
			);
		}

		if (userWithUsernameExists) {
			ErrorThrower.throwBadRequest(
				`A user with a username of ${username} is already exists.`
			);
		}
	}

	static async #createUserForSignup({email, username, password}) {
		const hashedPassword = await PasswordHasher.hash(password);
		const activationLink = ActivationLinkGenerator.generate();

		const user = await UserService.create({
			password: hashedPassword,
			activationLink,
			username,
			email
		});

		return user;
	}

	static async loginWithEmail({email, password}) {
		await this.#handleUserWithEmailDoesNotExist(email);

		const user = await UserService.getByEmail(email);
		const tokens = await this.#login(user, password);

		return {tokens, user};
	}

	static async #handleUserWithEmailDoesNotExist(email) {
		const userDoesNotExist = !(await UserService.exists({email}));

		if (userDoesNotExist) {
			ErrorThrower.throwBadRequest(`No user with email ${email} was found.`);
		}
	}

	static async loginWithUsername({username, password}) {
		await this.#handleUserWithUsernameDoesNotExist(username);

		const user = await UserService.getByUsername(username);
		const tokens = await this.#login(user, password);

		return {tokens, user};
	}

	static async #handleUserWithUsernameDoesNotExist(username) {
		const userDoesNotExist = !(await UserService.exists({username}));

		if (userDoesNotExist) {
			ErrorThrower.throwBadRequest(
				`No user with username ${username} was found.`
			);
		}
	}

	static async #login(user, password) {
		await this.#handlePasswordComparison(password, user.password);

		const tokens = await this.#createTokensForUser(user);

		return tokens;
	}

	static async #handlePasswordComparison(password, hashedPassword) {
		const passwordsAreNotEqual = !(await PasswordComparer.compareToHash(
			password,
			hashedPassword
		));

		if (passwordsAreNotEqual) {
			ErrorThrower.throwBadRequest("Wrong password.");
		}
	}

	static async refresh(refreshToken) {
		if (!refreshToken) {
			ErrorThrower.throwUnauthorized();
		}

		const userPayload = TokenVerificator.verifyRefresh(refreshToken);
		const tokenFromDb = await RefreshTokenService.getByToken(refreshToken);

		if (!userPayload || !tokenFromDb) {
			ErrorThrower.throwUnauthorized();
		}

		const user = await UserService.getById(userPayload.id);

		const tokens = await this.#createTokensForUser(user);

		return {tokens, user};
	}

	static async #createTokensForUser(user) {
		const tokens = await this.#createTokens(user.id, {...user});

		return tokens;
	}

	static async #createTokens(userId, payload) {
		const tokens = TokenGenerator.generateAccessAndRefreshPair(payload);

		await RefreshTokenService.saveForUser(userId, tokens.refresh);

		return tokens;
	}

	static async logout(refreshToken) {
		await RefreshTokenService.deleteByToken(refreshToken);
	}
}

export default AuthService;
