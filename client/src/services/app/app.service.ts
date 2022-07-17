import ProjectsService from "@services/projects/projects.service";
import UsersService from "@services/users/users.service";
import {AppDispatch} from "@store/index";
import {profileActs} from "@store/profile/profile.slice";

class AppService {
	static initializeProfilePage(username: string) {
		return async (dispatch: AppDispatch) => {
			dispatch(profileActs.setIsLoading(true));
			try {
				await dispatch(UsersService.fetchOneByUsername(username));
				await dispatch(ProjectsService.fetchByUsername(username, {limit: 4}));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(profileActs.setIsLoading(false));
			}
		};
	}
}

export default AppService;
