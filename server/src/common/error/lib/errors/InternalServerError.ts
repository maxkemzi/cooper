import ApiError from "./ApiError";

class InternalServerError extends ApiError {
	constructor(message: ApiError["message"] = "Something went wrong.") {
		super(500, message);
	}
}

export default InternalServerError;
