import {ProfileToApi, updateProfile} from "@entities/profile";
import {editUser} from "@entities/user";
import {openSuccessToast} from "@shared/toast";

const editProfileThunk =
	(profile: Partial<ProfileToApi>) => async (dispatch: RootDispatch) => {
		const response = await updateProfile(profile);

		dispatch(editUser(response.data));

		dispatch(openSuccessToast("Profile has been edited."));
	};

export default editProfileThunk;
