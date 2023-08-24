import {ValidationError} from "express-validator";
import ApiError from "./ApiError";

class ValidationApiError extends ApiError {
	errors: ValidationError[];

	constructor(message: ApiError["message"], errors: ValidationError[]) {
		super(400, message);
		this.errors = errors;
	}
}

export default ValidationApiError;
