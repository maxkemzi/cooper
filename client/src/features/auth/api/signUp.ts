import {mapUserDataFromApi} from "@entities/user";
import $api from "@shared/api";
import {AuthRes, AuthResFromApi, SignupDataToApi} from "./types";

const signUp = async ({
	username,
	email,
	password
}: SignupDataToApi): Promise<AuthRes> => {
	const response = await $api.post<AuthResFromApi>("/auth/signup", {
		username,
		email,
		password
	});
	return {
		...response,
		data: {...response.data, user: mapUserDataFromApi(response.data.user)}
	};
};

export default signUp;
