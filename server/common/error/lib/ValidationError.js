const ApiError = require("./ApiError");

class ValidationError extends ApiError {
	errors;

	constructor(message, errors) {
		super(400, message);
		this.errors = errors;
	}
}

module.exports = ValidationError;
