const {validationResult} = require("express-validator");
const ApiError = require("../exceptions/ApiError");
const AuthService = require("../services/auth.service");

class AuthController {
	static async register(req, res, next) {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return next(ApiError.badRequest("Validation error!", errors.array()));
			}

			const {username, email, password} = req.body;
			const userData = await AuthService.register({
				username,
				email,
				password
			});

			res.cookie("refreshToken", userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			res.json(userData);
		} catch (e) {
			console.log(e);
			next(e);
		}
	}

	static async loginWithEmail(req, res, next) {
		try {
			const {email, password} = req.body;
			const userData = await AuthService.loginWithEmail({email, password});

			res.cookie("refreshToken", userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			res.json(userData);
		} catch (e) {
			next(e);
		}
	}

	static async loginWithUsername(req, res, next) {
		try {
			const {username, password} = req.body;
			const userData = await AuthService.loginWithUsername({
				username,
				password
			});

			res.cookie("refreshToken", userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			res.json(userData);
		} catch (e) {
			next(e);
		}
	}

	static async logout(req, res, next) {
		try {
			const {refreshToken} = req.cookies;
			const token = await AuthService.logout(refreshToken);
			res.clearCookie("refreshToken");
			res.json(token);
		} catch (e) {
			next(e);
		}
	}

	static async refresh(req, res, next) {
		try {
			const {refreshToken} = req.cookies;
			const userData = await AuthService.refresh(refreshToken);
			res.cookie("refreshToken", userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			res.json(userData);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = AuthController;
