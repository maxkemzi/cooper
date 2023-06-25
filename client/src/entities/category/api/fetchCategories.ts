import axios from "axios";
import mapCategoryDataFromApi from "./mappers/mapCategoryDataFromApi";
import {MultipleCategoryRes, MultipleCategoryResFromApi} from "./types";

const fetchCategories = async (): Promise<MultipleCategoryRes> => {
	const response = await axios.get<MultipleCategoryResFromApi>(
		`${process.env.API_URL}/category`
	);

	return {
		...response,
		data: response.data.map(category => mapCategoryDataFromApi(category))
	};
};

export default fetchCategories;
