import ICategory from "./category";

export type WorkType = "default" | "remote";
export type Visibility = "public" | "private";

interface Project {
	_id?: string;
	workType: WorkType;
	budget: number;
	categories: ICategory[];
	title: string;
	description: string;
	visibility?: Visibility;
	creator: {
		avatar: string;
		username: string;
		projectsCount: number;
		createdDate: string;
	};
	createdDate: string;
}

export default Project;
