import axios, {AxiosResponse} from "axios";
import $api from "@axios/index";
import {
	LoginWithEmailArgs,
	LoginWithUsernameArgs,
	RegisterArgs
} from "@customTypes/services/auth";
import AuthResponse from "@customTypes/apis/auth";

class AuthAPI {
	static async loginWithEmail({
		email,
		password
	}: LoginWithEmailArgs): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>("/auth/login-email", {email, password});
	}

	static async loginWithUsername({
		username,
		password
	}: LoginWithUsernameArgs): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>("/auth/login-username", {
			username,
			password
		});
	}

	static async register({
		username,
		email,
		password
	}: RegisterArgs): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>("/auth/register", {
			username,
			email,
			password
		});
	}

	static async logout(): Promise<void> {
		return $api.post("/auth/logout");
	}

	static async check(): Promise<AxiosResponse<AuthResponse>> {
		return axios.get<AuthResponse>(`${process.env.API_URL}api/auth/refresh`, {
			withCredentials: true
		});
	}
}

export default AuthAPI;
