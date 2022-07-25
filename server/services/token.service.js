const jwt = require("jsonwebtoken");
const Token = require("../models/Token");

class TokenService {
	static generateTokens(payload) {
		const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
			expiresIn: "30s" // 30m
		});
		const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
			expiresIn: "60s" // 30d
		});

		return {accessToken, refreshToken};
	}

	static validateAccessToken(token) {
		try {
			const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
			return userData;
		} catch (e) {
			return null;
		}
	}

	static validateRefreshToken(token) {
		try {
			const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
			return userData;
		} catch (e) {
			return null;
		}
	}

	static async saveToken(userId, refreshToken) {
		const tokenData = await Token.findOne({user: userId});

		if (tokenData) {
			tokenData.refreshToken = refreshToken;
			return tokenData.save();
		}

		const token = await Token.create({user: userId, refreshToken});
		return token;
	}

	static async removeToken(refreshToken) {
		const token = await Token.deleteOne({refreshToken});
		return token;
	}

	static async findToken(refreshToken) {
		const token = await Token.findOne({refreshToken});
		return token;
	}
}

module.exports = TokenService;
