import $api from "@axios/index";
import UserResponse from "@customTypes/apis/users";
import {UserUpdateValues} from "@customTypes/services/users";
import axios, {AxiosResponse} from "axios";

class UsersAPI {
	static async updateOne(
		user: UserUpdateValues
	): Promise<AxiosResponse<UserResponse>> {
		return $api.put("/users", user);
	}

	static async fetchOneByUsername(
		username: string
	): Promise<AxiosResponse<UserResponse>> {
		return axios.get<UserResponse>(
			`${process.env.API_URL}api/users/${username}`,
			{
				withCredentials: true
			}
		);
	}

	static async save(
		projectId: number | string
	): Promise<AxiosResponse<UserResponse>> {
		return $api.put<UserResponse>(`/users/save/${projectId}`);
	}

	static async unsave(
		projectId: number | string
	): Promise<AxiosResponse<UserResponse>> {
		return $api.put<UserResponse>(`/users/unsave/${projectId}`);
	}
}

export default UsersAPI;
