import UsersAPI from "@api/users/users.api";
import {UserUpdateValues} from "@customTypes/services/users";
import {appActs} from "@store/app/app.slice";
import {authActs} from "@store/auth/auth.slice";
import {AppDispatch} from "@store/index";
import {profileActs} from "@store/profile/profile.slice";
import {projectsActs} from "@store/projects/projects.slice";

class UsersService {
	static updateOne(user: UserUpdateValues) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await UsersAPI.updateOne(user);
				dispatch(authActs.setUser(response.data));
				dispatch(
					appActs.setNotification({
						type: "success",
						text: "Profile has been saved."
					})
				);
				console.log(response);
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

	static fetchOneByUsername(username: string) {
		return async (dispatch: AppDispatch) => {
			dispatch(profileActs.setIsLoading(true));
			try {
				const response = await UsersAPI.fetchOneByUsername(username);
				console.log(response);
				dispatch(profileActs.setProfile(response.data));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
				console.log(e.response?.data?.message);
			} finally {
				dispatch(profileActs.setIsLoading(false));
			}
		};
	}

	static addToFavorites(projectId: number | string) {
		return async (dispatch: AppDispatch) => {
			dispatch(projectsActs.setIsAddingToFavorites(true));
			try {
				const response = await UsersAPI.addToFavorites(projectId);
				dispatch(authActs.setUser(response.data));
				console.log(response);
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
				console.log(e.response?.data?.message);
			} finally {
				dispatch(projectsActs.setIsAddingToFavorites(false));
			}
		};
	}

	static removeFromFavorites(projectId: number | string) {
		return async (dispatch: AppDispatch) => {
			dispatch(projectsActs.setIsAddingToFavorites(true));
			try {
				const response = await UsersAPI.removeFromFavorites(projectId);
				dispatch(authActs.setUser(response.data));
				console.log(response);
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
				console.log(e.response?.data?.message);
			} finally {
				dispatch(projectsActs.setIsAddingToFavorites(false));
			}
		};
	}
}

export default UsersService;
