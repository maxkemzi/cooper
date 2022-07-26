interface User {
	email: string;
	username: string;
	_id?: string;
	description: string;
	avatar: string;
	isActivated: boolean;
	location: string;
	projectsCount: number;
	favorites: string[];
}

export default User;
