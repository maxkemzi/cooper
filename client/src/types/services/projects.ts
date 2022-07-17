import {CreateFormValues} from "@customTypes/forms";

export interface ProjectsRequestParams {
	page?: number;
	sort?: string;
	search?: string;
	limit?: number;
}

export interface ProjectsCreateValues
	extends Omit<CreateFormValues, "categories"> {
	categories: (string | number)[];
}
