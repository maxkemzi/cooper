import $api from "@shared/api";
import {mapUserDataFromApi} from "./mappers";
import {SingleUserRes, SingleUserResFromApi} from "./types";

const removeFavoriteProject = async (
	projectId: string
): Promise<SingleUserRes> => {
	const response = await $api.delete<SingleUserResFromApi>(
		`/user/favoriteProject/${projectId}`
	);

	return {...response, data: mapUserDataFromApi(response.data)};
};

export default removeFavoriteProject;
