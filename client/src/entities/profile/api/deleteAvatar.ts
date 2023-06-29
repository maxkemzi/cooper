import $api from "@shared/api";
import {SingleProfileRes, SingleProfileResFromApi} from "./types";
import mapProfileDataFromApi from "./mappers/mapProfileDataFromApi";

const deleteAvatar = async (): Promise<SingleProfileRes> => {
	const response = await $api.delete<SingleProfileResFromApi>(
		"/user/profile/avatar"
	);

	return {...response, data: mapProfileDataFromApi(response.data)};
};

export default deleteAvatar;
