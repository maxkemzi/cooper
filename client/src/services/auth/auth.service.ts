import {
	LoginWithEmailArgs,
	LoginWithUsernameArgs,
	RegisterArgs
} from "@customTypes/auth";
import {AppDispatch} from "@store/index";
import {authActs} from "@store/auth/auth.slice";
import {appActs} from "@store/app/app.slice";
import AuthAPI from "@api/auth/auth.api";

class AuthService {
	static loginWithEmail({email, password}: LoginWithEmailArgs) {
		return async (dispatch: AppDispatch) => {
			dispatch(authActs.setIsLoading(true));
			try {
				const response = await AuthAPI.loginWithEmail({email, password});
				console.log(response);
				localStorage.setItem("token", response.data.accessToken);
				dispatch(authActs.setIsAuth(true));
				dispatch(authActs.setUser(response.data.user));
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			} finally {
				dispatch(authActs.setIsLoading(false));
			}
		};
	}

	static loginWithUsername({username, password}: LoginWithUsernameArgs) {
		return async (dispatch: AppDispatch) => {
			dispatch(authActs.setIsLoading(true));
			try {
				const response = await AuthAPI.loginWithUsername({username, password});
				console.log(response);
				localStorage.setItem("token", response.data.accessToken);
				dispatch(authActs.setIsAuth(true));
				dispatch(authActs.setUser(response.data.user));
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			} finally {
				dispatch(authActs.setIsLoading(false));
			}
		};
	}

	static register({username, email, password}: RegisterArgs) {
		return async (dispatch: AppDispatch) => {
			dispatch(authActs.setIsLoading(true));
			try {
				const response = await AuthAPI.register({
					username,
					email,
					password
				});
				console.log(response);
				localStorage.setItem("token", response.data.accessToken);
				dispatch(authActs.setIsAuth(true));
				dispatch(authActs.setUser(response.data.user));
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			} finally {
				dispatch(authActs.setIsLoading(false));
			}
		};
	}

	static logout() {
		return async (dispatch: AppDispatch) => {
			try {
				await AuthAPI.logout();
				localStorage.removeItem("token");
				dispatch(authActs.setIsAuth(false));
				dispatch(
					authActs.setUser({
						email: "",
						location: "",
						avatar: "",
						id: 0,
						description: "",
						isActivated: false,
						projectsCount: 0,
						saves: [],
						username: ""
					})
				);
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			}
		};
	}

	static check() {
		return async (dispatch: AppDispatch) => {
			dispatch(authActs.setIsLoading(true));
			try {
				const response = await AuthAPI.check();
				console.log(response);
				localStorage.setItem("token", response.data.accessToken);
				dispatch(authActs.setIsAuth(true));
				dispatch(authActs.setUser(response.data.user));
			} catch (e) {
				console.log(e.response?.data?.message);
			} finally {
				dispatch(authActs.setIsLoading(false));
			}
		};
	}
}

export default AuthService;
