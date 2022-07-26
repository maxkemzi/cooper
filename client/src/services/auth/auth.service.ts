import {
	LoginWithEmailArgs,
	LoginWithUsernameArgs,
	RegisterArgs
} from "@customTypes/services/auth";
import {AppDispatch} from "@store/index";
import {authActs} from "@store/auth/auth.slice";
import {appActs} from "@store/app/app.slice";
import AuthAPI from "@api/auth/auth.api";

class AuthService {
	static loginWithEmail(
		{email, password}: LoginWithEmailArgs,
		setStatus?: (status?: any) => void,
		redirect?: () => void
	) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await AuthAPI.loginWithEmail({email, password});
				console.log(response);
				localStorage.setItem("token", response.data.accessToken);
				dispatch(authActs.setIsAuth(true));
				dispatch(authActs.setUser(response.data.user));

				redirect();
			} catch (e) {
				setStatus(e.response.data.message);
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
				console.log(e.response?.data?.message);
			}
		};
	}

	static loginWithUsername(
		{username, password}: LoginWithUsernameArgs,
		setStatus?: (status?: any) => void,
		redirect?: () => void
	) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await AuthAPI.loginWithUsername({username, password});
				console.log(response);
				localStorage.setItem("token", response.data.accessToken);
				dispatch(authActs.setIsAuth(true));
				dispatch(authActs.setUser(response.data.user));
				redirect();
			} catch (e) {
				setStatus(e.response.data.message);
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
				console.log(e.response?.data?.message);
			}
		};
	}

	static register(
		{username, email, password}: RegisterArgs,
		setStatus?: (status?: any) => void,
		redirect?: () => void
	) {
		return async (dispatch: AppDispatch) => {
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
				redirect();
			} catch (e) {
				setStatus(e.response.data.message);
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
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
						_id: "1",
						description: "",
						isActivated: false,
						projectsCount: 0,
						favorites: [],
						username: ""
					})
				);
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
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
