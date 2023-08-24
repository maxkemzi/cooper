import {User, UserDocument} from "../database/services";

class ProfileDto {
	username: User["username"];
	avatar: User["avatar"];
	description: User["description"];
	location: User["location"];
	createdDate: User["createdDate"];

	constructor(data: UserDocument) {
		this.username = data.username;
		this.avatar = data.avatar;
		this.description = data.description;
		this.location = data.location;
		this.createdDate = data.createdDate;
	}
}

export default ProfileDto;
