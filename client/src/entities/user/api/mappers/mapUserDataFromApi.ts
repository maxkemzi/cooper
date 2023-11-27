import {User} from "../../types";
import {UserFromApi} from "../types";

const mapUserDataFromApi = (data: UserFromApi): User => ({
	id: data.id,
	avatar: data.avatar,
	description: data.description,
	email: data.email,
	favoriteProjects: data.favoriteProjects,
	isActivated: data.isActivated,
	location: data.location,
	username: data.username,
	createdDate: data.createdDate
});

export default mapUserDataFromApi;
