import {TokenVerificator} from "../../common/auth";
import {
	RefreshToken,
	RefreshTokenDbService,
	UserDbService,
	UserDocument
} from "../../common/database/services";
import {AuthDto, UserDto} from "../../common/dtos";
import {ErrorFactory} from "../../common/error";
import {
	ActivationLinkGenerator,
	ActivationLinkSender
} from "./lib/activationLink";
import {PasswordComparer, PasswordHasher} from "./lib/password";
import {TokenGenerator} from "./lib/token";
import {
	LoginBaseData,
	LoginWithEmailData,
	LoginWithUsernameData,
	SignupData
} from "./types";

class AuthService {
	static async signUp({email, username, password}: SignupData) {
		await this.#handleUserAlreadyExists(email, username);

		const user = await this.#createUserForSignup({email, username, password});

		await ActivationLinkSender.sendToEmail(user.activationLink, email);

		const tokens = await this.#createTokensForUser(user);

		return new AuthDto({tokens, user});
	}

	static async #handleUserAlreadyExists(
		email: SignupData["email"],
		username: SignupData["username"]
	) {
		const [userWithEmailExists, userWithUsernameExists] = await Promise.all([
			UserDbService.exists({email}),
			UserDbService.exists({username})
		]);

		if (userWithEmailExists) {
			throw ErrorFactory.getBadRequest(
				`A user with an email address of ${email} is already exists.`
			);
		}

		if (userWithUsernameExists) {
			throw ErrorFactory.getBadRequest(
				`A user with a username of ${username} is already exists.`
			);
		}
	}

	static async #createUserForSignup({email, username, password}: SignupData) {
		const hashedPassword = await PasswordHasher.hash(password);
		const activationLink = ActivationLinkGenerator.generate();

		const user = await UserDbService.create({
			password: hashedPassword,
			activationLink,
			username,
			email
		});

		return user as typeof user & {activationLink: string};
	}

	static async loginWithEmail({email, password}: LoginWithEmailData) {
		await this.#handleUserWithEmailDoesNotExist(email);

		const user = (await UserDbService.getByEmail(email))!;
		const tokens = await this.#login(user, password);

		return new AuthDto({tokens, user});
	}

	static async #handleUserWithEmailDoesNotExist(
		email: LoginWithEmailData["email"]
	) {
		const userDoesNotExist = !(await UserDbService.exists({email}));
		if (userDoesNotExist) {
			throw ErrorFactory.getBadRequest(
				`No user with email ${email} was found.`
			);
		}
	}

	static async loginWithUsername({username, password}: LoginWithUsernameData) {
		await this.#handleUserWithUsernameDoesNotExist(username);

		const user = (await UserDbService.getByUsername(username))!;
		const tokens = await this.#login(user, password);

		return new AuthDto({tokens, user});
	}

	static async #handleUserWithUsernameDoesNotExist(
		username: LoginWithUsernameData["username"]
	) {
		const userDoesNotExist = !(await UserDbService.exists({username}));

		if (userDoesNotExist) {
			throw ErrorFactory.getBadRequest(
				`No user with username ${username} was found.`
			);
		}
	}

	static async #login(user: UserDocument, password: LoginBaseData["password"]) {
		await this.#handlePasswordComparison(password, user.password);

		const tokens = await this.#createTokensForUser(user);

		return tokens;
	}

	static async #handlePasswordComparison(
		password: string,
		hashedPassword: string
	) {
		const passwordsAreNotEqual = !(await PasswordComparer.compareToHash(
			password,
			hashedPassword
		));

		if (passwordsAreNotEqual) {
			throw ErrorFactory.getBadRequest("Wrong password.");
		}
	}

	static async refresh(refreshToken: RefreshToken["token"]) {
		if (!refreshToken) {
			throw ErrorFactory.getUnauthorized();
		}

		const userPayload = TokenVerificator.verifyRefresh<UserDto>(refreshToken);
		const tokenFromDb = await RefreshTokenDbService.getByToken(refreshToken);

		if (!userPayload || !tokenFromDb) {
			throw ErrorFactory.getUnauthorized();
		}

		const user = await UserDbService.getById(userPayload.id);
		if (!user) {
			throw ErrorFactory.getUnauthorized();
		}

		const tokens = await this.#createTokensForUser(user);

		return new AuthDto({tokens, user});
	}

	static async #createTokensForUser(user: UserDocument) {
		const tokens = TokenGenerator.generateAccessAndRefreshPair({
			...new UserDto(user)
		});

		await RefreshTokenDbService.saveForUser(user.id, tokens.refresh);

		return tokens;
	}

	static async logout(refreshToken: RefreshToken["token"]) {
		await RefreshTokenDbService.deleteByToken(refreshToken);
	}
}

export default AuthService;
