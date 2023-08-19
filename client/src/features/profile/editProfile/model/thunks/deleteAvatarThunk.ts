import {deleteAvatar} from "@entities/profile";
import {editUser} from "@entities/user";
import {AppError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";

const deleteAvatarThunk = () => async (dispatch: RootDispatch) => {
	try {
		const response = await deleteAvatar();

		const newAvatar = response.data.avatar;

		dispatch(editUser({avatar: newAvatar}));
		dispatch(openSuccessToast("Avatar has been deleted."));
	} catch (e) {
		throw new AppError("Error editing profile.");
	}
};

export default deleteAvatarThunk;
