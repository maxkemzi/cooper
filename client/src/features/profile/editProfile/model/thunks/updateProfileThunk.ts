import {ProfileToApi} from "@entities/profile";
import {updateUser} from "@entities/user";
import {clearError, setError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";
import updateProfile from "../../api/updateProfile";

const updateProfileThunk =
	(profile: Partial<ProfileToApi>) => async (dispatch: RootDispatch) => {
		dispatch(clearError());
		try {
			const response = await updateProfile(profile);

			dispatch(updateUser(response.data));

			dispatch(openSuccessToast("Profile has been updated."));
		} catch (e) {
			dispatch(setError());
		}
	};

export default updateProfileThunk;
