import axios from "axios";

class CategoriesAPI {
	static async fetchAll() {
		return axios.get(`${process.env.API_URL}api/categories`);
	}
}

export default CategoriesAPI;
