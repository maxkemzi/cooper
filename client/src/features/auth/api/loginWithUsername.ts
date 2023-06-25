import {mapUserDataFromApi} from "@entities/user";
import $api from "@shared/api";
import {AuthRes, AuthResFromApi, LoginWithUsernameDataToApi} from "./types";

const loginWithUsername = async ({
	username,
	password
}: LoginWithUsernameDataToApi): Promise<AuthRes> => {
	const response = await $api.post<AuthResFromApi>("/auth/login-username", {
		username,
		password
	});
	return {
		...response,
		data: {...response.data, user: mapUserDataFromApi(response.data.user)}
	};
};

export default loginWithUsername;
