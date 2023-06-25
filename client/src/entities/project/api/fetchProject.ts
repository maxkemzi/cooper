import axios from "axios";
import {SingleProjectRes, SingleProjectResFromApi} from "./types";
import mapProjectDataFromApi from "./mappers/mapProjectDataFromApi";

const fetchProject = async (id: string): Promise<SingleProjectRes> => {
	const response = await axios.get<SingleProjectResFromApi>(
		`${process.env.API_URL}/project/${id}`
	);

	return {...response, data: mapProjectDataFromApi(response.data)};
};

export default fetchProject;
