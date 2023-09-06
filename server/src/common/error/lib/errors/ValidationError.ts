import {ValidationError as ValidatorValidationError} from "express-validator";
import ApiError from "./ApiError";

class ValidationError extends ApiError {
	errors: ValidatorValidationError[];

	constructor({
		message = "Validation error.",
		errors = []
	}: {
		message?: ApiError["message"];
		errors?: ValidatorValidationError[];
	} = {}) {
		super(400, message);
		this.errors = errors;
	}
}

export default ValidationError;
