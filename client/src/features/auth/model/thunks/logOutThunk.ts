import {setUser} from "@entities/user";
import {RouteName} from "@shared/constants";
import {redirect} from "@shared/redirect";
import {openSuccessToast} from "@shared/toast";
import logOut from "../../api/logOut";
import {setIsAuth} from "../slice";

const logOutThunk = () => async (dispatch: RootDispatch) => {
	await logOut();

	localStorage.removeItem("token");

	dispatch(setIsAuth(false));
	dispatch(setUser(null));

	dispatch(openSuccessToast("Successfully logged out."));

	dispatch(redirect(RouteName.LOGIN));
};

export default logOutThunk;
