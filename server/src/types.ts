import {Request} from "express";
import {UserDto} from "./common/dtos";

interface CustomRequest extends Request {
	user?: UserDto;
}

export type {CustomRequest};
