import $api from "@shared/api";
import {mapProjectDataFromApi} from "./mappers";
import {SingleProjectRes, SingleProjectResFromApi} from "./types";

const deleteProject = async (id: string): Promise<SingleProjectRes> => {
	const response = await $api.delete<SingleProjectResFromApi>(`/project/${id}`);

	return {...response, data: mapProjectDataFromApi(response.data)};
};

export default deleteProject;
