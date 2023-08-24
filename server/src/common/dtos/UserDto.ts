import {User, UserDocument} from "../database/services";

class UserDto {
	id: UserDocument["id"];
	favoriteProjects: User["favoriteProjects"];
	email: User["email"];
	username: User["username"];
	avatar: User["avatar"];
	description: User["description"];
	location: User["location"];
	isActivated: User["isActivated"];

	constructor(data: UserDocument) {
		this.id = data.id;
		this.favoriteProjects = data.favoriteProjects;
		this.email = data.email;
		this.username = data.username;
		this.avatar = data.avatar;
		this.description = data.description;
		this.location = data.location;
		this.isActivated = data.isActivated;
	}
}

export default UserDto;
