import $api from "@shared/api";
import {mapUserDataFromApi} from "./mappers";
import {SingleUserRes, SingleUserResFromApi} from "./types";

const addFavoriteProject = async (
	projectId: string
): Promise<SingleUserRes> => {
	const response = await $api.post<SingleUserResFromApi>(
		`/user/favoriteProject/${projectId}`
	);

	return {...response, data: mapUserDataFromApi(response.data)};
};

export default addFavoriteProject;
