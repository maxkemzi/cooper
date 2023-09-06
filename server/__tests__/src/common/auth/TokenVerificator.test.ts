import jwt from "jsonwebtoken";
import {TokenVerificator} from "../../../../src/common/auth";

const originalAccessSecret = process.env.JWT_ACCESS_SECRET;
const originalRefreshSecret = process.env.JWT_REFRESH_SECRET;

beforeAll(() => {
	process.env.JWT_ACCESS_SECRET = "access_secret";
	process.env.JWT_REFRESH_SECRET = "refresh_secret";
});

afterAll(() => {
	process.env.JWT_ACCESS_SECRET = originalAccessSecret;
	process.env.JWT_REFRESH_SECRET = originalRefreshSecret;
});

describe("verifyAccess", () => {
	test("should return payload when token is valid", () => {
		const payload = {userId: 123};
		const token = jwt.sign(payload, "access_secret");

		const result = TokenVerificator.verifyAccess(token);

		expect(result).toMatchObject(payload);
	});

	it("should return null when token is invalid", () => {
		const token = "invalid_token";

		const result = TokenVerificator.verifyAccess(token);

		expect(result).toBeNull();
	});
});

describe("verifyRefresh", () => {
	test("should return payload when token is valid", () => {
		const payload = {userId: 456};
		const token = jwt.sign(payload, "refresh_secret");

		const result = TokenVerificator.verifyRefresh(token);

		expect(result).toMatchObject(payload);
	});

	it("should return null when token is invalid", () => {
		const token = "invalid_token";

		const result = TokenVerificator.verifyRefresh(token);

		expect(result).toBeNull();
	});
});
