import $api from "@axios/index";
import {User} from "@customTypes/entities";
import axios from "axios";

class UsersAPI {
	static async updateOne(user: User) {
		return $api.put("/users", user);
	}

	static async fetchOneByUsername(username: string) {
		return axios.get(`${process.env.API_URL}api/users/${username}`, {
			withCredentials: true
		});
	}

	static async save(projectId: number | string) {
		return $api.put(`/users/save/${projectId}`);
	}

	static async unsave(projectId: number | string) {
		return $api.put(`/users/unsave/${projectId}`);
	}
}

export default UsersAPI;
