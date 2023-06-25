import $api from "@shared/api";
import {
	GetMultipleReqParams,
	MultipleProjectsRes,
	MultipleProjectsResFromApi
} from "./types";
import mapProjectDataFromApi from "./mappers/mapProjectDataFromApi";

const fetchFavoriteProjects = async (
	params: GetMultipleReqParams
): Promise<MultipleProjectsRes> => {
	const response = await $api.get<MultipleProjectsResFromApi>(
		"/user/favoriteProject",
		{params}
	);

	return {
		...response,
		data: response.data.map(project => mapProjectDataFromApi(project))
	};
};

export default fetchFavoriteProjects;
