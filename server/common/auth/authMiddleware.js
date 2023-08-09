import {ErrorThrower} from "../error";
import TokenVerificator from "./TokenVerificator";

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

export default authMiddleware;
