import $api from "@axios/index";
import {IUser} from "@customTypes/index";
import axios from "axios";

class UsersAPI {
	static async updateOne(user: IUser) {
		return $api.put("/users", user);
	}

	static async fetchOneByUsername(username: string) {
		return axios.get(`${process.env.API_URL}api/users/${username}`, {
			withCredentials: true
		});
	}

	static async save(projectId: number) {
		return $api.put(`/users/save/${projectId}`);
	}

	static async unsave(projectId: number) {
		return $api.put(`/users/unsave/${projectId}`);
	}
}

export default UsersAPI;
