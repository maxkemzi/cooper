import axios from "axios";
import {SingleProfileRes, SingleProfileResFromApi} from "./types";
import mapProfileDataFromApi from "./mappers/mapProfileDataFromApi";

const fetchProfile = async (username: string): Promise<SingleProfileRes> => {
	const response = await axios.get<SingleProfileResFromApi>(
		`${process.env.API_URL}/user/profile/${username}`,
		{withCredentials: true}
	);

	return {...response, data: mapProfileDataFromApi(response.data)};
};

export default fetchProfile;
