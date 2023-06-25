import {
	ProjectToApi,
	SingleProjectRes,
	SingleProjectResFromApi,
	mapProjectDataFromApi
} from "@entities/project";
import $api from "@shared/api";

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
