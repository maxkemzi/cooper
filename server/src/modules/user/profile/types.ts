import {User} from "../../../common/database/services";

interface Profile {
	email: User["email"];
	username: User["username"];
	avatar: User["avatar"];
	description: User["description"];
	location: User["location"];
	createdDate: User["createdDate"];
}

export type {Profile};
