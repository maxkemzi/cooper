import {AxiosResponse} from "axios";
import {Profile} from "../model/types";

interface ProfileFromApi {
	username: string;
	avatar: string | null;
	description: string | null;
	location: string | null;
	createdDate: string;
}

interface ProfileToApi {
	username: string;
	email: string;
	location: string | null;
	description: string | null;
}

type SingleProfileRes = AxiosResponse<Profile>;
type SingleProfileResFromApi = ProfileFromApi;

export type {
	ProfileFromApi,
	ProfileToApi,
	SingleProfileRes,
	SingleProfileResFromApi
};
