import {setUser} from "@entities/user";
import {RouteName} from "@shared/constants";
import {redirect} from "@shared/redirect";
import {isAxiosError} from "axios";
import loginWithEmail from "../../api/loginWithEmail";
import {LoginWithEmailDataToApi} from "../../api/types";
import {setIsAuth} from "../slice";

const loginWithEmailThunk =
	(
		{email, password}: LoginWithEmailDataToApi,
		setStatus?: (status?: any) => void
	) =>
	async (dispatch: RootDispatch) => {
		try {
			const response = await loginWithEmail({email, password});

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

export default loginWithEmailThunk;
