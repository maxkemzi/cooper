import {User, UserFromApi} from "@entities/user";
import {AxiosResponse} from "axios";

type LoginWithEmailDataToApi = {
	email: string;
	password: string;
};

type LoginWithUsernameDataToApi = {
	username: string;
	password: string;
};

type SignupDataToApi = {
	username: string;
	email: string;
	password: string;
};

type AuthTokens = {
	access: string;
	refresh: string;
};

type AuthRes = AxiosResponse<{
	tokens: AuthTokens;
	user: User;
}>;

type AuthResFromApi = {
	tokens: AuthTokens;
	user: UserFromApi;
};

type AuthSuccessRes = AxiosResponse<{
	success: boolean;
}>;

type AuthSuccessResFromApi = {
	success: boolean;
};

export type {
	AuthRes,
	AuthResFromApi,
	LoginWithEmailDataToApi,
	LoginWithUsernameDataToApi,
	SignupDataToApi,
	AuthSuccessResFromApi,
	AuthSuccessRes
};
