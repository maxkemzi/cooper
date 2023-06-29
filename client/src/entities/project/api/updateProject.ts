import $api from "@shared/api";
import {mapProjectDataFromApi} from "./mappers";
import {ProjectToApi, SingleProjectRes, SingleProjectResFromApi} from "./types";

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
