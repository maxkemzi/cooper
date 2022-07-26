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

	static async addToFavorites(
		projectId: number | string
	): Promise<AxiosResponse<UserResponse>> {
		return $api.post<UserResponse>(`/users/favorites/${projectId}`);
	}

	static async removeFromFavorites(
		projectId: number | string
	): Promise<AxiosResponse<UserResponse>> {
		return $api.delete<UserResponse>(`/users/favorites/${projectId}`);
	}
}

export default UsersAPI;
