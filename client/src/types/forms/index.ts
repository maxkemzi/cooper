import {Category} from "@customTypes/entities";
import {Visibility, WorkType} from "@customTypes/entities/project";

export interface CreateFormValues {
	title: string;
	description: string;
	workType: WorkType;
	categories: Category[];
	visibility: Visibility;
}
