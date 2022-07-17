interface User {
	email: string;
	username: string;
	_id?: string;
	description: string;
	avatar: string;
	isActivated: boolean;
	location: string;
	projectsCount: number;
	saves: [];
}

export default User;
