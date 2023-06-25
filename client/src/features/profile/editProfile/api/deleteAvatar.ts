import $api from "@shared/api";
import {
	SingleProfileRes,
	SingleProfileResFromApi,
	mapProfileDataFromApi
} from "@entities/profile";

const deleteAvatar = async (): Promise<SingleProfileRes> => {
	const response = await $api.delete<SingleProfileResFromApi>(
		"/user/profile/avatar"
	);

	return {...response, data: mapProfileDataFromApi(response.data)};
};

export default deleteAvatar;
