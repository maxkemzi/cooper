const ApiError = require("./ApiError");
const ErrorFactory = require("./ErrorFactory");
const ValidationError = require("./ValidationError");

class ErrorResponder {
	constructor(res) {
		this.res = res;
	}

	respond(error) {
		const apiError = ErrorResponder.#parseErrorToApiError(error);

		const body = ErrorResponder.#getResponseBody(apiError);

		this.res.status(error.statusCode).json(body);
	}

	static #parseErrorToApiError(error) {
		if (this.#isApiError(error)) {
			return error;
		}

		return ErrorFactory.getInternalServer();
	}

	static #isApiError(error) {
		return error instanceof ApiError;
	}

	static #getResponseBody(error) {
		const body = {message: error.message};

		if (ErrorResponder.#isValidationError(error)) {
			body.errors = error.errors;
		}

		return body;
	}

	static #isValidationError(error) {
		return error instanceof ValidationError;
	}
}

module.exports = ErrorResponder;
