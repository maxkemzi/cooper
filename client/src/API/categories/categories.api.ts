import CategoriesResponse from "@customTypes/apis/categories";
import axios, {AxiosResponse} from "axios";

class CategoriesAPI {
	static async fetchAll(): Promise<AxiosResponse<CategoriesResponse>> {
		return axios.get<CategoriesResponse>(
			`${process.env.API_URL}api/categories`
		);
	}
}

export default CategoriesAPI;
