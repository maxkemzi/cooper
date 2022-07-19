import FilesAPI from "@api/files/files.api";
import {appActs} from "@store/app/app.slice";
import {authActs} from "@store/auth/auth.slice";
import {AppDispatch} from "@store/index";

class FilesService {
	static uploadAvatar(file: any) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await FilesAPI.uploadAvatar(file);
				console.log(response);
				dispatch(authActs.setUser(response.data));
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			}
		};
	}

	static deleteAvatar() {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await FilesAPI.deleteAvatar();
				console.log(response);
				dispatch(authActs.setUser(response.data));
			} catch (e) {
				dispatch(appActs.setError(e.response?.data?.message));
				console.log(e.response?.data?.message);
			}
		};
	}
}

export default FilesService;
