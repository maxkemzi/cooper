import FilesAPI from "@api/files/files.api";
import {appActs} from "@store/app/app.slice";
import {authActs} from "@store/auth/auth.slice";
import {AppDispatch} from "@store/index";

class FilesService {
	static uploadAvatar(file: any) {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await FilesAPI.uploadAvatar(file);
				dispatch(authActs.setUser(response.data));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
			}
		};
	}

	static deleteAvatar() {
		return async (dispatch: AppDispatch) => {
			try {
				const response = await FilesAPI.deleteAvatar();
				dispatch(authActs.setUser(response.data));
			} catch (e) {
				dispatch(
					appActs.setNotification({
						type: "danger",
						text: "Something went wrong."
					})
				);
			}
		};
	}
}

export default FilesService;
