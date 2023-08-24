import ApiError from "./ApiError";
import ValidationApiError from "./ValidationApiError";

class ErrorFactory {
	static getUnauthorized(
		message: ApiError["message"] = "User is not authorized."
	): ApiError {
		return new ApiError(401, message);
	}

	static getBadRequest(
		message: ApiError["message"] = "Bad request."
	): ApiError {
		return new ApiError(400, message);
	}

	static getInternalServer(
		message: ApiError["message"] = "Something went wrong."
	): ApiError {
		return new ApiError(500, message);
	}

	static getValidation(
		errors: ValidationApiError["errors"] = [],
		message: ValidationApiError["message"] = "Validation error."
	): ValidationApiError {
		return new ValidationApiError(message, errors);
	}
}

export default ErrorFactory;
