interface User {
	id: string;
	email: string;
	username: string;
	description: string | null;
	avatar: string | null;
	isActivated: boolean;
	location: string | null;
	favoriteProjects: string[];
	createdDate: string;
}

export type {User};
