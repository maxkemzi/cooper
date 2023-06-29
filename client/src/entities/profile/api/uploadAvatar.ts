import $api from "@shared/api";
import mapProfileDataFromApi from "./mappers/mapProfileDataFromApi";
import {SingleProfileRes, SingleProfileResFromApi} from "./types";

const uploadAvatar = async (file: any): Promise<SingleProfileRes> => {
	const formData = new FormData();
	formData.append("file", file);

	const response = await $api.post<SingleProfileResFromApi>(
		"/user/profile/avatar",
		formData
	);

	return {...response, data: mapProfileDataFromApi(response.data)};
};

export default uploadAvatar;
