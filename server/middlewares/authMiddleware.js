const ApiError = require("../exceptions/ApiError");
const TokenService = require("../services/TokenService");

module.exports = (req, res, next) => {
	try {
		const authorizationHeader = req.headers.authorization;
		if (!authorizationHeader) {
			return next(ApiError.unauthorizedError());
		}

		const accessToken = authorizationHeader.split(" ")[1];
		if (!accessToken) {
			return next(ApiError.unauthorizedError());
		}

		const userData = TokenService.validateAccessToken(accessToken);
		if (!userData) {
			return next(ApiError.unauthorizedError());
		}

		req.user = userData;
		next();
	} catch (e) {
		next(ApiError.unauthorizedError());
	}
};
