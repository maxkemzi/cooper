import {uploadAvatar} from "@entities/profile";
import {editUser} from "@entities/user";
import {openSuccessToast} from "@shared/toast";

const uploadAvatarThunk = (file: any) => async (dispatch: RootDispatch) => {
	const response = await uploadAvatar(file);

	const newAvatar = response.data.avatar;

	dispatch(editUser({avatar: newAvatar}));
	dispatch(openSuccessToast("Profile has been edited."));
};

export default uploadAvatarThunk;
