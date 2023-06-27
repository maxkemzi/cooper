import {ProfileProjectFromApi} from "../types";
import {ProfileProject} from "../../model/types";

const mapProfileProjectDataFromApi = (
	data: ProfileProjectFromApi
): ProfileProject => ({
	id: data.id,
	budget: data.budget,
	categories: data.categories,
	description: data.description,
	title: data.title,
	workType: data.workType,
	createdDate: data.createdDate,
	visibility: data.visibility,
	creator: data.creator
});

export default mapProfileProjectDataFromApi;
