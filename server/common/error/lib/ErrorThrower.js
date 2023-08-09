import ErrorFactory from "./ErrorFactory";

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

export default ErrorThrower;
