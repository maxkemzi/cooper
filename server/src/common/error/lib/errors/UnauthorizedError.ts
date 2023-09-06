import ApiError from "./ApiError";

class UnauthorizedError extends ApiError {
	constructor(message: ApiError["message"] = "User is not authorized.") {
		super(401, message);
	}
}

export default UnauthorizedError;
