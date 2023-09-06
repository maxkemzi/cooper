import BadRequestError from "./errors/BadRequestError";
import InternalServerError from "./errors/InternalServerError";
import UnauthorizedError from "./errors/UnauthorizedError";
import ValidationError from "./errors/ValidationError";

class ErrorFactory {
	static getUnauthorized(
		message?: UnauthorizedError["message"]
	): UnauthorizedError {
		return new UnauthorizedError(message);
	}

	static getBadRequest(message?: BadRequestError["message"]): BadRequestError {
		return new BadRequestError(message);
	}

	static getInternalServer(
		message?: InternalServerError["message"]
	): InternalServerError {
		return new InternalServerError(message);
	}

	static getValidation({
		errors,
		message
	}: {
		errors?: ValidationError["errors"];
		message?: ValidationError["message"];
	} = {}): ValidationError {
		return new ValidationError({errors, message});
	}
}

export default ErrorFactory;
