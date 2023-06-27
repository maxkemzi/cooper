import {setUser} from "@entities/user";
import {RouteName} from "@shared/constants";
import {redirect} from "@shared/redirect";
import {isAxiosError} from "axios";
import loginWithUsername from "../../api/loginWithUsername";
import {LoginWithUsernameDataToApi} from "../../api/types";
import {setIsAuth} from "../slice";

const loginWithUsernameThunk =
	(
		{username, password}: LoginWithUsernameDataToApi,
		setStatus?: (status?: any) => void
	) =>
	async (dispatch: RootDispatch) => {
		try {
			const response = await loginWithUsername({username, password});

			localStorage.setItem("token", response.data.tokens.access);

			dispatch(setIsAuth(true));
			dispatch(setUser(response.data.user));

			dispatch(redirect(RouteName.HOME));
		} catch (e) {
			if (isAxiosError(e) && e.response) {
				setStatus?.(e.response.data.message);
			}
		}
	};

export default loginWithUsernameThunk;
