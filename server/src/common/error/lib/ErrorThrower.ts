import ApiError from "./ApiError";
import ErrorFactory from "./ErrorFactory";
import ValidationApiError from "./ValidationApiError";

class ErrorThrower {
	static throwUnauthorized(message?: ApiError["message"]): never {
		throw ErrorFactory.getUnauthorized(message);
	}

	static throwBadRequest(message?: ApiError["message"]): never {
		throw ErrorFactory.getBadRequest(message);
	}

	static throwInternalServer(message?: ApiError["message"]): never {
		throw ErrorFactory.getInternalServer(message);
	}

	static throwValidation(
		errors?: ValidationApiError["errors"],
		message?: ValidationApiError["message"]
	): never {
		throw ErrorFactory.getValidation(errors, message);
	}
}

export default ErrorThrower;
