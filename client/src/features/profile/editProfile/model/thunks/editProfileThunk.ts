import {ProfileToApi} from "@entities/profile";
import {editUser} from "@entities/user";
import {clearError, setError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";
import updateProfile from "../../api/updateProfile";

const editProfileThunk =
	(profile: Partial<ProfileToApi>) => async (dispatch: RootDispatch) => {
		dispatch(clearError());
		try {
			const response = await updateProfile(profile);

			dispatch(editUser(response.data));

			dispatch(openSuccessToast("Profile has been edited."));
		} catch (e) {
			dispatch(setError());
		}
	};

export default editProfileThunk;
