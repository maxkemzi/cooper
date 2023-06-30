import {ProfileToApi, updateProfile} from "@entities/profile";
import {editUser} from "@entities/user";
import {AppError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";

const editProfileThunk =
	(profile: Partial<ProfileToApi>) => async (dispatch: RootDispatch) => {
		try {
			const response = await updateProfile(profile);

			dispatch(editUser(response.data));

			dispatch(openSuccessToast("Profile has been edited."));
		} catch (e) {
			throw new AppError("Error editing profile.");
		}
	};

export default editProfileThunk;
