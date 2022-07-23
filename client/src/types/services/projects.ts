import {Category} from "@customTypes/entities";
import {Visibility, WorkType} from "@customTypes/entities/project";
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

export interface ProjectsUpdateValues {
	id: string | number;
	description?: string;
	title?: string;
	categories?: Category[];
	workType?: WorkType;
	budget?: number;
	visibility?: Visibility;
}
