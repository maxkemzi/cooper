import {editUser} from "@entities/user";
import {clearError, setError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";
import uploadAvatar from "../../api/uploadAvatar";

const uploadAvatarThunk = (file: any) => async (dispatch: RootDispatch) => {
	dispatch(clearError());
	try {
		const response = await uploadAvatar(file);

		const newAvatar = response.data.avatar;

		dispatch(editUser({avatar: newAvatar}));
		dispatch(openSuccessToast("Profile has been edited."));
	} catch (e) {
		dispatch(setError(""));
	}
};

export default uploadAvatarThunk;
