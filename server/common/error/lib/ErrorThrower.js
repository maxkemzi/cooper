const ErrorFactory = require("./ErrorFactory");

class ErrorThrower {
	static throwUnauthorized(message) {
		throw ErrorFactory.getUnauthorized(message);
	}

	static throwBadRequest(message) {
		throw ErrorFactory.getBadRequest(message);
	}

	static throwInternalServer(message) {
		throw ErrorFactory.getInternalServer(message);
	}

	static throwValidation(errors, message) {
		throw ErrorFactory.getValidation(errors, message);
	}
}

module.exports = ErrorThrower;
