import {uploadAvatar} from "@entities/profile";
import {editUser} from "@entities/user";
import {AppError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";

const uploadAvatarThunk = (file: any) => async (dispatch: RootDispatch) => {
	try {
		const response = await uploadAvatar(file);

		const newAvatar = response.data.avatar;

		dispatch(editUser({avatar: newAvatar}));
		dispatch(openSuccessToast("Avatar has been uploaded."));
	} catch (e) {
		throw new AppError("Error editing profile.");
	}
};

export default uploadAvatarThunk;
