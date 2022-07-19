import {Category} from "@customTypes/entities";
import {Visibility, WorkType} from "@customTypes/entities/project";

export interface CreateFormValues {
	title: string;
	description: string;
	workType: WorkType;
	categories: Category[];
	visibility: Visibility;
}

export interface EditProfileFormValues {
	username: string;
	email: string;
	description: string;
	avatar: string;
	location: string;
}

export type FormPromiseAction<Values> = (values: Values) => Promise<void>;
