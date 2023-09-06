import {Response} from "express";
import {ValidationError} from "express-validator";
import ErrorFactory from "./ErrorFactory";
import ApiError from "./errors/ApiError";
import ValidationApiError from "./errors/ValidationError";

class ErrorResponder {
	res: Response;

	constructor(res: Response) {
		this.res = res;
	}

	respond(error: any) {
		const apiError = ErrorResponder.#parseErrorToApiError(error);

		const body = ErrorResponder.#getResponseBody(apiError);

		this.res.status(error.statusCode).json(body);
	}

	static #parseErrorToApiError(error: any): ApiError {
		if (this.#isApiError(error)) {
			return error;
		}

		return ErrorFactory.getInternalServer();
	}

	static #isApiError(error: any): error is ApiError {
		return error instanceof ApiError;
	}

	static #getResponseBody(apiError: ApiError | ValidationApiError) {
		const body: {message: string; errors?: ValidationError[]} = {
			message: apiError.message
		};

		if (ErrorResponder.#isValidationError(apiError)) {
			body.errors = apiError.errors;
		}

		return body;
	}

	static #isValidationError(error: any): error is ValidationApiError {
		return error instanceof ValidationApiError;
	}
}

export default ErrorResponder;
