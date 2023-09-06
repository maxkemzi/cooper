class ApiError extends Error {
	statusCode: number;

	constructor(statusCode: number, message: Error["message"]) {
		super(message);
		this.statusCode = statusCode;

		// Restore prototype chain
		Object.setPrototypeOf(this, ApiError.prototype);
	}
}

export default ApiError;
