import $api from "@shared/api";
import {AuthSuccessRes, AuthSuccessResFromApi} from "./types";

const logOut = async (): Promise<AuthSuccessRes> => {
	const response = await $api.post<AuthSuccessResFromApi>("/auth/logout");
	return response;
};

export default logOut;
