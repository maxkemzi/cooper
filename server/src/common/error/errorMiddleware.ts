import {NextFunction, Response} from "express";
import {CustomRequest} from "../../types";
import ErrorResponder from "./lib/ErrorResponder";

const errorMiddleware = (
	err: any,
	req: CustomRequest,
	res: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction
) => {
	console.log(err);

	const errorResponder = new ErrorResponder(res);
	errorResponder.respond(err);
};

export default errorMiddleware;
