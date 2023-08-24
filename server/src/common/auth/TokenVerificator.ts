import jwt from "jsonwebtoken";

class TokenVerificator {
	static verifyAccess<Payload>(token: string): Payload | null {
		return this.#verifyWithSecretKey<Payload>(
			token,
			process.env.JWT_ACCESS_SECRET as string
		);
	}

	static verifyRefresh<Payload>(token: string): Payload | null {
		return this.#verifyWithSecretKey<Payload>(
			token,
			process.env.JWT_REFRESH_SECRET as string
		);
	}

	static #verifyWithSecretKey<Payload>(
		token: string,
		secretKey: string
	): Payload | null {
		try {
			const payload = jwt.verify(token, secretKey);
			return payload as Payload;
		} catch (e) {
			return null;
		}
	}
}

export default TokenVerificator;
