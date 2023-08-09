import ApiError from "./ApiError";
import ValidationError from "./ValidationError";

class ErrorFactory {
	static getUnauthorized(message = "User is not authorized.") {
		return new ApiError(401, message);
	}

	static getBadRequest(message = "Bad request.") {
		return new ApiError(400, message);
	}

	static getInternalServer(message = "Something went wrong.") {
		return new ApiError(500, message);
	}

	static getValidation(errors = [], message = "Validation error.") {
		return new ValidationError(message, errors);
	}
}

export default ErrorFactory;
