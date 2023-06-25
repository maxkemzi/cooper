import {setUser} from "@entities/user";
import {setError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";
import logOut from "../../api/logOut";
import {setIsAuth} from "../slice";

const logOutThunk = () => async (dispatch: RootDispatch) => {
	try {
		await logOut();

		localStorage.removeItem("token");

		dispatch(setIsAuth(false));
		dispatch(setUser(null));

		dispatch(openSuccessToast("Successfully logged out."));

		// TODO: redirect to the login page
	} catch (e) {
		dispatch(setError());
	}
};

export default logOutThunk;
