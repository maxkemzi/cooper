import {NextFunction, Response} from "express";
import {CustomRequest} from "../../types";
import {UserDto} from "../dtos";
import TokenVerificator from "./TokenVerificator";
import ErrorFactory from "../error/lib/ErrorFactory";

const authMiddleware = (
	req: CustomRequest,
	res: Response,
	next: NextFunction
) => {
	try {
		const authorizationHeader = req.headers.authorization;
		if (!authorizationHeader) {
			throw ErrorFactory.getUnauthorized();
		}

		const accessToken = authorizationHeader.split(" ")[1];
		if (!accessToken) {
			throw ErrorFactory.getUnauthorized();
		}

		const userPayload = TokenVerificator.verifyAccess<UserDto>(accessToken);
		if (!userPayload) {
			throw ErrorFactory.getUnauthorized();
		}

		req.user = userPayload;
		next();
	} catch (e) {
		console.log(e);
		next(e);
	}
};

export default authMiddleware;
