import {
	ProfileToApi,
	SingleProfileRes,
	SingleProfileResFromApi,
	mapProfileDataFromApi
} from "@entities/profile";
import $api from "@shared/api";

const updateProfile = async (
	profile: Partial<ProfileToApi>
): Promise<SingleProfileRes> => {
	const response = await $api.put<SingleProfileResFromApi>(
		"/user/profile",
		profile
	);

	return {...response, data: mapProfileDataFromApi(response.data)};
};

export default updateProfile;
