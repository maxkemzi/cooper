import {NextFunction, Response} from "express";
import {CustomRequest} from "../../types";
import {UserDto} from "../dtos";
import {ErrorThrower} from "../error";
import TokenVerificator from "./TokenVerificator";

const authMiddleware = (
	req: CustomRequest,
	res: Response,
	next: NextFunction
) => {
	try {
		const authorizationHeader = req.headers.authorization;
		if (!authorizationHeader) {
			ErrorThrower.throwUnauthorized();
		}

		const accessToken = authorizationHeader.split(" ")[1];
		if (!accessToken) {
			ErrorThrower.throwUnauthorized();
		}

		const userPayload = TokenVerificator.verifyAccess<UserDto>(accessToken);
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
