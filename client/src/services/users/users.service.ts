import UsersAPI from "@api/users/users.api";
import {User} from "@customTypes/entities";
import {appActs} from "@store/app/app.slice";
import {authActs} from "@store/auth/auth.slice";
import {AppDispatch} from "@store/index";
import {profileActs} from "@store/profile/profile.slice";
import {projectsActs} from "@store/projects/projects.slice";

class UsersService {
	static updateOne(user: User) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await UsersAPI.updateOne(user);
				dispatch(authActs.setUser(response.data));
				dispatch(profileActs.setProfile(response.data));
				console.log(response);
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
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
				console.log(e.response?.data?.message);
			} finally {
				dispatch(profileActs.setIsLoading(false));
			}
		};
	}

	static save(projectId: number | string) {
		return async (dispatch: AppDispatch) => {
			dispatch(projectsActs.setIsSaving(true));
			try {
				const response = await UsersAPI.save(projectId);
				dispatch(authActs.setUser(response.data));
				console.log(response);
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			} finally {
				dispatch(projectsActs.setIsSaving(false));
			}
		};
	}

	static unsave(projectId: number | string) {
		return async (dispatch: AppDispatch) => {
			dispatch(projectsActs.setIsSaving(true));
			try {
				const response = await UsersAPI.unsave(projectId);
				dispatch(authActs.setUser(response.data));
				console.log(response);
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			} finally {
				dispatch(projectsActs.setIsSaving(false));
			}
		};
	}
}

export default UsersService;
