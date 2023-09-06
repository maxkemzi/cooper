import {NextFunction, Response} from "express";
import TokenVerificator from "../../../../src/common/auth/TokenVerificator";
import authMiddleware from "../../../../src/common/auth/authMiddleware";
import UnauthorizedError from "../../../../src/common/error/lib/errors/UnauthorizedError";
import {CustomRequest} from "../../../../src/types";

jest.mock("../../../../src/common/auth/TokenVerificator");
jest.mock("../../../../src/common/error/lib/errors/UnauthorizedError");

const setUp = () => {
	const req = {headers: {}} as CustomRequest;
	const res = {} as Response;
	const next = jest.fn() as NextFunction;

	return {req, res, next};
};

test("should call next() with user payload when access token is valid", () => {
	const {req, res, next} = setUp();
	const userPayload = {userId: 123};
	(TokenVerificator.verifyAccess as jest.Mock).mockReturnValue(userPayload);
	const accessToken = "valid_access_token";
	req.headers.authorization = `Bearer ${accessToken}`;

	authMiddleware(req, res, next);

	expect(TokenVerificator.verifyAccess).toHaveBeenCalledWith(accessToken);
	expect(req.user).toEqual(userPayload);
	expect(next).toHaveBeenCalled();
});

test("should call next() with unauthorized error when authorization header is missing", () => {
	const {req, res, next} = setUp();

	authMiddleware(req, res, next);

	expect(next).toHaveBeenCalledWith(expect.any(UnauthorizedError));
});

test("should throw unauthorized error when access token is missing", () => {
	const {req, res, next} = setUp();
	req.headers.authorization = "Bearer ";

	authMiddleware(req, res, next);

	expect(next).toHaveBeenCalledWith(expect.any(UnauthorizedError));
});

it("should throw unauthorized error when access token is invalid", () => {
	const {req, res, next} = setUp();
	(TokenVerificator.verifyAccess as jest.Mock).mockReturnValue(null);
	const accessToken = "invalid_access_token";
	req.headers.authorization = `Bearer ${accessToken}`;

	authMiddleware(req, res, next);

	expect(TokenVerificator.verifyAccess).toHaveBeenCalledWith(accessToken);
	expect(next).toHaveBeenCalledWith(expect.any(UnauthorizedError));
});

test("should throw unauthorized error when an exception is thrown", () => {
	const {req, res, next} = setUp();
	(TokenVerificator.verifyAccess as jest.Mock).mockImplementation(() => {
		throw new Error("Some error");
	});
	const accessToken = "valid_access_token";
	req.headers.authorization = `Bearer ${accessToken}`;

	authMiddleware(req, res, next);

	expect(TokenVerificator.verifyAccess).toHaveBeenCalledWith(accessToken);
	expect(next).toHaveBeenCalledWith(expect.any(Error));
});
