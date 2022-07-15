const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const User = require("../models/User");
const ApiError = require("../exceptions/ApiError");
const EmailService = require("./EmailService");
const UserDto = require("../dtos/UserDto");
const TokenService = require("./TokenService");

class AuthService {
	static async register({username, email, password}) {
		const candidateByEmail = await User.findOne({email});
		const candidateByUsername = await User.findOne({username});

		if (candidateByEmail) {
			throw ApiError.badRequest(
				`A user with a mail address of ${email} is already exists!`
			);
		}

		if (candidateByUsername) {
			throw ApiError.badRequest(
				`A user with a username of ${username} is already exists!`
			);
		}

		const hashedPassword = await bcrypt.hash(password, 5);
		const activationLink = uuid.v4();

		const user = await User.create({
			username,
			email,
			password: hashedPassword,
			activationLink
		});

		await EmailService.sendActivation(
			email,
			`
		${process.env.API_URL}/api/users/activate/${activationLink}
		`
		);

		const userDto = new UserDto(user);

		const tokens = TokenService.generateTokens({...userDto});
		await TokenService.saveToken(userDto.id, tokens.refreshToken);

		return {...tokens, user: userDto};
	}

	static async loginWithEmail({email, password}) {
		const user = await User.findOne({email});

		if (!user) {
			throw ApiError.badRequest("No user with this email was found!");
		}

		const isPassEquals = await bcrypt.compare(password, user.password);

		if (!isPassEquals) {
			throw ApiError.badRequest("Wrong password!");
		}

		const userDto = new UserDto(user);
		const tokens = TokenService.generateTokens({...userDto});
		await TokenService.saveToken(userDto.id, tokens.refreshToken);

		return {...tokens, user: userDto};
	}

	static async loginWithUsername({username, password}) {
		const user = await User.findOne({username});

		if (!user) {
			throw ApiError.badRequest("No user with this username was found!");
		}

		const isPassEquals = await bcrypt.compare(password, user.password);

		if (!isPassEquals) {
			throw ApiError.badRequest("Wrong password!");
		}

		const userDto = new UserDto(user);
		const tokens = TokenService.generateTokens({...userDto});
		await TokenService.saveToken(userDto.id, tokens.refreshToken);

		return {...tokens, user: userDto};
	}

	static async logout(refreshToken) {
		const token = await TokenService.removeToken(refreshToken);
		return token;
	}

	static async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.unauthorizedError();
		}

		const userData = TokenService.validateRefreshToken(refreshToken);
		const tokenFromDb = await TokenService.findToken(refreshToken);

		if (!userData || !tokenFromDb) {
			throw ApiError.unauthorizedError();
		}

		const user = await User.findById(userData.id);
		const userDto = new UserDto(user);
		const tokens = TokenService.generateTokens({...userDto});

		await TokenService.saveToken(userDto.id, tokens.refreshToken);
		return {...tokens, user: userDto};
	}
}

module.exports = AuthService;
