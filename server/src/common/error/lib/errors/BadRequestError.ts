import ApiError from "./ApiError";

class BadRequestError extends ApiError {
	constructor(message: ApiError["message"] = "Bad request.") {
		super(400, message);
	}
}

export default BadRequestError;
