import axios from "axios";
import {
	GetMultipleReqParams,
	MultipleProjectsRes,
	MultipleProjectsResFromApi
} from "./types";
import mapProjectDataFromApi from "./mappers/mapProjectDataFromApi";

const fetchProjects = async (
	params: GetMultipleReqParams
): Promise<MultipleProjectsRes> => {
	const response = await axios.get<MultipleProjectsResFromApi>(
		`${process.env.API_URL}/project`,
		{
			params
		}
	);

	return {
		...response,
		data: response.data.map(project => mapProjectDataFromApi(project))
	};
};

export default fetchProjects;
