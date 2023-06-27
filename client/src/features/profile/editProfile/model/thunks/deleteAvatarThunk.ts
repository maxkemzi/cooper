import {editUser} from "@entities/user";
import {openSuccessToast} from "@shared/toast";
import deleteAvatar from "../../api/deleteAvatar";

const deleteAvatarThunk = () => async (dispatch: RootDispatch) => {
	const response = await deleteAvatar();

	const newAvatar = response.data.avatar;

	dispatch(editUser({avatar: newAvatar}));
	dispatch(openSuccessToast("Profile has been edited."));
};

export default deleteAvatarThunk;
