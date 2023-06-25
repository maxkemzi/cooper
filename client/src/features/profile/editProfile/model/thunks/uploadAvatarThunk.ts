import {updateUser} from "@entities/user";
import {clearError, setError} from "@shared/error";
import uploadAvatar from "../../api/uploadAvatar";

const uploadAvatarThunk = (file: any) => async (dispatch: RootDispatch) => {
	dispatch(clearError());
	try {
		const response = await uploadAvatar(file);

		const newAvatar = response.data.avatar;

		dispatch(updateUser({avatar: newAvatar}));
	} catch (e) {
		dispatch(setError());
	}
};

export default uploadAvatarThunk;
