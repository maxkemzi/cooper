import $api from "@shared/api";
import mapProfileDataFromApi from "./mappers/mapProfileDataFromApi";
import {ProfileToApi, SingleProfileRes, SingleProfileResFromApi} from "./types";

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
