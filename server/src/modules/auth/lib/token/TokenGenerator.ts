import jwt from "jsonwebtoken";

type Tokens = {
	access: string;
	refresh: string;
};

class TokenGenerator {
	static generateAccessAndRefreshPair(payload: object): Tokens {
		const access = this.#generateAccess(payload);
		const refresh = this.#generateRefresh(payload);

		return {access, refresh};
	}

	static #generateAccess(payload: object): Tokens["access"] {
		const token = jwt.sign(payload, process.env.JWT_ACCESS_SECRET as string, {
			expiresIn: "30m"
		});
		return token;
	}

	static #generateRefresh(payload: object): Tokens["refresh"] {
		const token = jwt.sign(payload, process.env.JWT_REFRESH_SECRET as string, {
			expiresIn: "30d"
		});
		return token;
	}
}

export default TokenGenerator;
