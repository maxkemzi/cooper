type ProjectWorkType = "onsite" | "remote";

type ProjectVisibility = "public" | "private";

type ProjectCategory = {
	id: string;
	name: string;
};

type ProjectCreator = {
	username: string;
	avatar: string | null;
};

export type {
	ProjectVisibility,
	ProjectWorkType,
	ProjectCategory,
	ProjectCreator
};
