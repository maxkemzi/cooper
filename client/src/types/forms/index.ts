import {Category} from "@customTypes/entities";
import {Visibility, WorkType} from "@customTypes/entities/project";

export interface CreateFormValues {
	title: string;
	description: string;
	workType: WorkType;
	categories: Category[];
	visibility: Visibility;
	budget: number;
}

export interface EditProfileFormValues {
	username: string;
	email: string;
	description: string;
	avatar: string;
	location: string;
}

export interface EditProjectFormValues {
	id: string | number;
	description: string;
	title: string;
	categories: Category[];
	workType: WorkType;
	budget: number;
	visibility: Visibility;
}

export type FormPromiseAction<Values> = (values: Values) => Promise<void>;
