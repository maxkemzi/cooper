import {
	SingleProjectRes,
	SingleProjectResFromApi,
	mapProjectDataFromApi
} from "@entities/project";
import $api from "@shared/api";

const deleteProject = async (id: string): Promise<SingleProjectRes> => {
	const response = await $api.delete<SingleProjectResFromApi>(`/project/${id}`);

	return {...response, data: mapProjectDataFromApi(response.data)};
};

export default deleteProject;
