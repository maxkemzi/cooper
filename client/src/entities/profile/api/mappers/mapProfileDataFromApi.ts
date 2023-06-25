import {ProfileFromApi} from "../types";
import {Profile} from "../../model/types";

const mapProfileDataFromApi = (data: ProfileFromApi): Profile => ({
	username: data.username,
	avatar: data.avatar,
	description: data.description,
	location: data.location,
	createdDate: data.createdDate
});

export default mapProfileDataFromApi;
