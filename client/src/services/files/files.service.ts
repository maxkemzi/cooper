import FilesAPI from "@api/files/files.api";
import {appActs} from "@store/app/app.slice";
import {authActs} from "@store/auth/auth.slice";
import {AppDispatch} from "@store/index";
import {profileActs} from "@store/profile/profile.slice";

class FilesService {
	static uploadAvatar(file: any) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await FilesAPI.uploadAvatar(file);
				console.log(response);
				dispatch(authActs.setUser(response.data));
				dispatch(profileActs.setProfile(response.data));
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			}
		};
	}
}

export default FilesService;
