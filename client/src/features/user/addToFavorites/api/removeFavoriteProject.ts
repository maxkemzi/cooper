import {
	SingleUserRes,
	SingleUserResFromApi,
	mapUserDataFromApi
} from "@entities/user";
import $api from "@shared/api";

const removeFavoriteProject = async (
	projectId: string
): Promise<SingleUserRes> => {
	const response = await $api.delete<SingleUserResFromApi>(
		`/user/favoriteProject/${projectId}`
	);

	return {...response, data: mapUserDataFromApi(response.data)};
};

export default removeFavoriteProject;
