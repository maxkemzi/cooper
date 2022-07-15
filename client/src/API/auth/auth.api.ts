import axios from "axios";
import $api from "@axios/index";
import {
	LoginWithEmailArgs,
	LoginWithUsernameArgs,
	RegisterArgs
} from "@customTypes/auth";

class AuthAPI {
	static async loginWithEmail({email, password}: LoginWithEmailArgs) {
		return $api.post("/auth/login-email", {email, password});
	}

	static async loginWithUsername({username, password}: LoginWithUsernameArgs) {
		return $api.post("/auth/login-username", {username, password});
	}

	static async register({username, email, password}: RegisterArgs) {
		return $api.post("/auth/register", {username, email, password});
	}

	static async logout() {
		return $api.post("/auth/logout");
	}

	static async check() {
		return axios.get(`${process.env.API_URL}api/auth/refresh`, {
			withCredentials: true
		});
	}
}

export default AuthAPI;
