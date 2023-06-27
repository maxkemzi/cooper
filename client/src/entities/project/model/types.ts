import {
	ProjectCategory,
	ProjectCreator,
	ProjectVisibility,
	ProjectWorkType
} from "../types";

interface Project {
	id: string;
	workType: ProjectWorkType;
	budget: number;
	categories: ProjectCategory[];
	title: string;
	description: string;
	creator: ProjectCreator;
	visibility: ProjectVisibility;
	createdDate: string;
}

type ProfileProject = Project;

export type {Project, ProfileProject};
