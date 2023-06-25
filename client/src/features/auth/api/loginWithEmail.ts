import {mapUserDataFromApi} from "@entities/user";
import $api from "@shared/api";
import {AuthRes, AuthResFromApi, LoginWithEmailDataToApi} from "./types";

const loginWithEmail = async ({
	email,
	password
}: LoginWithEmailDataToApi): Promise<AuthRes> => {
	const response = await $api.post<AuthResFromApi>("/auth/login-email", {
		email,
		password
	});
	return {
		...response,
		data: {...response.data, user: mapUserDataFromApi(response.data.user)}
	};
};

export default loginWithEmail;
