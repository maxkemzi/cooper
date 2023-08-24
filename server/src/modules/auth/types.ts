import {User} from "../../common/database/services";

type SignupData = {
	email: User["email"];
	username: User["username"];
	password: User["password"];
};

type LoginBaseData = {
	password: User["password"];
};

type LoginWithEmailData = LoginBaseData & {
	email: User["email"];
};

type LoginWithUsernameData = LoginBaseData & {
	username: User["username"];
};

export type {
	SignupData,
	LoginBaseData,
	LoginWithEmailData,
	LoginWithUsernameData
};
