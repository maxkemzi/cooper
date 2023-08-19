import {
	RefreshTokenDbService,
	UserDbService
} from "../../common/database/services";
import {TokenVerificator} from "../../common/auth";
import {ErrorThrower} from "../../common/error";
import {PasswordComparer, PasswordHasher} from "./lib/password";
import {TokenGenerator} from "./lib/token";
import {
	ActivationLinkGenerator,
	ActivationLinkSender
} from "./lib/activationLink";
import {AuthDto, UserDto} from "../../common/dtos";

class AuthService {
	static async signUp({email, username, password}) {
		await this.#handleUserAlreadyExists(email, username);

		const user = await this.#createUserForSignup({email, username, password});

		await ActivationLinkSender.sendToEmail(user.activationLink, email);

		const tokens = await this.#createTokensForUser(user);

		return new AuthDto({tokens, user});
	}

	static async #handleUserAlreadyExists(email, username) {
		const [userWithEmailExists, userWithUsernameExists] = await Promise.all([
			UserDbService.exists({email}),
			UserDbService.exists({username})
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

		const user = await UserDbService.create({
			password: hashedPassword,
			activationLink,
			username,
			email
		});

		return user;
	}

	static async loginWithEmail({email, password}) {
		await this.#handleUserWithEmailDoesNotExist(email);

		const user = await UserDbService.getByEmail(email);
		const tokens = await this.#login(user, password);

		return new AuthDto({tokens, user});
	}

	static async #handleUserWithEmailDoesNotExist(email) {
		const userDoesNotExist = !(await UserDbService.exists({email}));
		if (userDoesNotExist) {
			ErrorThrower.throwBadRequest(`No user with email ${email} was found.`);
		}
	}

	static async loginWithUsername({username, password}) {
		await this.#handleUserWithUsernameDoesNotExist(username);

		const user = await UserDbService.getByUsername(username);
		const tokens = await this.#login(user, password);

		return new AuthDto({tokens, user});
	}

	static async #handleUserWithUsernameDoesNotExist(username) {
		const userDoesNotExist = !(await UserDbService.exists({username}));

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
		const tokenFromDb = await RefreshTokenDbService.getByToken(refreshToken);

		if (!userPayload || !tokenFromDb) {
			ErrorThrower.throwUnauthorized();
		}

		const user = await UserDbService.getById(userPayload.id);

		const tokens = await this.#createTokensForUser(user);

		return new AuthDto({tokens, user});
	}

	static async #createTokensForUser(user) {
		const tokens = TokenGenerator.generateAccessAndRefreshPair({
			...new UserDto(user)
		});

		await RefreshTokenDbService.saveForUser(user.id, tokens.refresh);

		return tokens;
	}

	static async logout(refreshToken) {
		await RefreshTokenDbService.deleteByToken(refreshToken);
	}
}

export default AuthService;
