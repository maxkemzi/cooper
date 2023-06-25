import {Project} from "../../model/types";
import {ProjectFromApi} from "../types";

const mapProjectDataFromApi = (data: ProjectFromApi): Project => ({
	id: data.id,
	title: data.title,
	description: data.description,
	budget: data.budget,
	categories: data.categories,
	createdDate: data.createdDate,
	creator: data.creator,
	workType: data.workType
});

export default mapProjectDataFromApi;
