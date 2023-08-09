import AuthService from "./service";

class AuthController {
	static async signUp(req, res, next) {
		try {
			const {username, email, password} = req.body;

			const {user, tokens} = await AuthService.signUp({
				username,
				email,
				password
			});

			res.cookie("refreshToken", tokens.refresh, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			res.json({user, tokens});
		} catch (e) {
			next(e);
		}
	}

	static async loginWithEmail(req, res, next) {
		try {
			const {email, password} = req.body;

			const {user, tokens} = await AuthService.loginWithEmail({
				email,
				password
			});

			res.cookie("refreshToken", tokens.refresh, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			res.json({user, tokens});
		} catch (e) {
			next(e);
		}
	}

	static async loginWithUsername(req, res, next) {
		try {
			const {username, password} = req.body;

			const {user, tokens} = await AuthService.loginWithUsername({
				username,
				password
			});

			res.cookie("refreshToken", tokens.refresh, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			res.json({user, tokens});
		} catch (e) {
			next(e);
		}
	}

	static async refresh(req, res, next) {
		try {
			const {refreshToken} = req.cookies;

			const {user, tokens} = await AuthService.refresh(refreshToken);

			res.cookie("refreshToken", tokens.refresh, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true
			});
			res.json({user, tokens});
		} catch (e) {
			next(e);
		}
	}

	static async logout(req, res, next) {
		try {
			const {refreshToken} = req.cookies;

			await AuthService.logout(refreshToken);

			res.clearCookie("refreshToken");
			res.json({success: true});
		} catch (e) {
			next(e);
		}
	}
}

export default AuthController;
