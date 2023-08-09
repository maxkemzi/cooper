import ErrorLogger from "./lib/ErrorLogger";
import ErrorResponder from "./lib/ErrorResponder";

// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err, req, res, next) => {
	ErrorLogger.log(err);

	const errorResponder = new ErrorResponder(res);
	errorResponder.respond(err);
};

export default errorMiddleware;
