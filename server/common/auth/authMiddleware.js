const {ErrorThrower} = require("../error");
const TokenVerificator = require("./TokenVerificator");

const authMiddleware = (req, res, next) => {
	try {
		const authorizationHeader = req.headers.authorization;
		if (!authorizationHeader) {
			ErrorThrower.throwUnauthorized();
		}

		const accessToken = authorizationHeader.split(" ")[1];
		if (!accessToken) {
			ErrorThrower.throwUnauthorized();
		}

		const userPayload = TokenVerificator.verifyAccess(accessToken);
		if (!userPayload) {
			ErrorThrower.throwUnauthorized();
		}

		req.user = userPayload;
		next();
	} catch (e) {
		next(e);
	}
};

module.exports = authMiddleware;
