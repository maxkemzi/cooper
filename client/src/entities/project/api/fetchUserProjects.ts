import $api from "@shared/api";
import {
	GetMultipleReqParams,
	MultipleProjectsRes,
	MultipleProjectsResFromApi
} from "./types";
import mapProjectDataFromApi from "./mappers/mapProjectDataFromApi";

const fetchUserProjects = async (
	params: GetMultipleReqParams
): Promise<MultipleProjectsRes> => {
	const response = await $api.get<MultipleProjectsResFromApi>(
		"/user/projects",
		{params}
	);

	return {
		...response,
		data: response.data.map(project => mapProjectDataFromApi(project))
	};
};

export default fetchUserProjects;
