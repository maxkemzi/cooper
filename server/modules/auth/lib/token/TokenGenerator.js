import jwt from "jsonwebtoken";

class TokenGenerator {
	static generateAccessAndRefreshPair(payload) {
		const access = this.#generateAccess(payload);
		const refresh = this.#generateRefresh(payload);

		return {access, refresh};
	}

	static #generateAccess(payload) {
		const token = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
			expiresIn: "30m"
		});
		return token;
	}

	static #generateRefresh(payload) {
		const token = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
			expiresIn: "30d"
		});
		return token;
	}
}

export default TokenGenerator;
