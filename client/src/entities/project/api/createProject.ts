import $api from "@shared/api";
import {mapProjectDataFromApi} from "./mappers";
import {ProjectToApi, SingleProjectRes, SingleProjectResFromApi} from "./types";

const createProject = async (
	project: ProjectToApi
): Promise<SingleProjectRes> => {
	const response = await $api.post<SingleProjectResFromApi>(
		"/project",
		project
	);

	return {...response, data: mapProjectDataFromApi(response.data)};
};

export default createProject;
