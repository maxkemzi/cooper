import {AxiosResponse} from "axios";
import {User} from "../model/types";

interface UserFromApi {
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

type SingleUserRes = AxiosResponse<User>;
type SingleUserResFromApi = UserFromApi;

export type {UserFromApi, SingleUserRes, SingleUserResFromApi};
