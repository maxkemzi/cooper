const ErrorLogger = require("./lib/ErrorLogger");
const ErrorResponder = require("./lib/ErrorResponder");

// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err, req, res, next) => {
	ErrorLogger.log(err);

	const errorResponder = new ErrorResponder(res);
	errorResponder.respond(err);
};

module.exports = errorMiddleware;
