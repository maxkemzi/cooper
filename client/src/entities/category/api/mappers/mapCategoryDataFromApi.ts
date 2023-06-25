import {Category} from "../../model/types";
import {CategoryFromApi} from "../types";

const mapCategoryDataFromApi = (data: CategoryFromApi): Category => ({
	id: data.id,
	name: data.name
});

export default mapCategoryDataFromApi;
