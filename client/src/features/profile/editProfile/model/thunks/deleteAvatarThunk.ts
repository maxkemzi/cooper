import {updateUser} from "@entities/user";
import {clearError, setError} from "@shared/error";
import deleteAvatar from "../../api/deleteAvatar";

const deleteAvatarThunk = () => async (dispatch: RootDispatch) => {
	dispatch(clearError());
	try {
		const response = await deleteAvatar();

		const newAvatar = response.data.avatar;

		dispatch(updateUser({avatar: newAvatar}));
	} catch (e) {
		dispatch(setError());
	}
};

export default deleteAvatarThunk;
