import {mapUserDataFromApi} from "@entities/user";
import axios from "axios";
import {AuthRes, AuthResFromApi} from "./types";

const refresh = async (): Promise<AuthRes> => {
	const response = await axios.get<AuthResFromApi>(
		`${process.env.API_URL}/auth/refresh`,
		{withCredentials: true}
	);
	return {
		...response,
		data: {...response.data, user: mapUserDataFromApi(response.data.user)}
	};
};

export default refresh;
