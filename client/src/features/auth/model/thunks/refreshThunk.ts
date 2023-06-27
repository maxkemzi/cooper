import {setUser} from "@entities/user";
import refresh from "../../api/refresh";
import {setIsAuth, setIsFetching} from "../slice";

const refreshThunk = () => async (dispatch: RootDispatch) => {
	dispatch(setIsFetching(true));
	try {
		const response = await refresh();

		localStorage.setItem("token", response.data.tokens.access);

		dispatch(setIsAuth(true));
		dispatch(setUser(response.data.user));
	} finally {
		dispatch(setIsFetching(false));
	}
};

export default refreshThunk;
