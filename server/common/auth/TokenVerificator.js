import jwt from "jsonwebtoken";

class TokenVerificator {
	static verifyAccess(token) {
		return this.#verifyWithSecretKey(token, process.env.JWT_ACCESS_SECRET);
	}

	static verifyRefresh(token) {
		return this.#verifyWithSecretKey(token, process.env.JWT_REFRESH_SECRET);
	}

	static #verifyWithSecretKey(token, secretKey) {
		try {
			const payload = jwt.verify(token, secretKey);
			return payload;
		} catch (e) {
			return null;
		}
	}
}

export default TokenVerificator;
