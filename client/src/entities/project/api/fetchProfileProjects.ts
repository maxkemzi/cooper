import axios from "axios";
import {
	MultipleProfileProjectsRes,
	MultipleProfileProjectsResFromApi
} from "./types";
import mapProfileProjectDataFromApi from "./mappers/mapProfileProjectDataFromApi";

const fetchProfileProjects = async (
	username: string
): Promise<MultipleProfileProjectsRes> => {
	const response = await axios.get<MultipleProfileProjectsResFromApi>(
		`${process.env.API_URL}/user/profile/${username}/projects`,
		{withCredentials: true}
	);

	return {
		...response,
		data: response.data.map(project => mapProfileProjectDataFromApi(project))
	};
};

export default fetchProfileProjects;
