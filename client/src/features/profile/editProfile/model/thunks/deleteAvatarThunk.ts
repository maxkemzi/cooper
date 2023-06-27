import {editUser} from "@entities/user";
import {clearError, setError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";
import deleteAvatar from "../../api/deleteAvatar";

const deleteAvatarThunk = () => async (dispatch: RootDispatch) => {
	dispatch(clearError());
	try {
		const response = await deleteAvatar();

		const newAvatar = response.data.avatar;

		dispatch(editUser({avatar: newAvatar}));
		dispatch(openSuccessToast("Profile has been edited."));
	} catch (e) {
		dispatch(setError());
	}
};

export default deleteAvatarThunk;
