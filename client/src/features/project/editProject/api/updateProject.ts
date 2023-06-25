import {
	ProjectToApi,
	SingleProjectRes,
	SingleProjectResFromApi,
	mapProjectDataFromApi
} from "@entities/project";
import $api from "@shared/api";

const updateProject = async (
	id: string,
	project: Partial<ProjectToApi>
): Promise<SingleProjectRes> => {
	const response = await $api.put<SingleProjectResFromApi>(
		`/project/${id}`,
		project
	);

	return {...response, data: mapProjectDataFromApi(response.data)};
};

export default updateProject;
