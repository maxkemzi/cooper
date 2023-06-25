import {
	SingleUserRes,
	SingleUserResFromApi,
	mapUserDataFromApi
} from "@entities/user";
import $api from "@shared/api";

const addFavoriteProject = async (
	projectId: string
): Promise<SingleUserRes> => {
	const response = await $api.post<SingleUserResFromApi>(
		`/user/favoriteProject/${projectId}`
	);

	return {...response, data: mapUserDataFromApi(response.data)};
};

export default addFavoriteProject;
