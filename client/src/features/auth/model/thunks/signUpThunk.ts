import {setUser} from "@entities/user";
import {isAxiosError} from "axios";
import signUp from "../../api/signUp";
import {SignupDataToApi} from "../../api/types";
import {setIsAuth} from "../slice";

const signUpThunk =
	(
		{username, password, email}: SignupDataToApi,
		setStatus?: (status?: any) => void
	) =>
	async (dispatch: RootDispatch) => {
		try {
			const response = await signUp({username, password, email});

			localStorage.setItem("token", response.data.tokens.access);

			dispatch(setIsAuth(true));
			dispatch(setUser(response.data.user));

			// TODO: redirect to the projects page
		} catch (e) {
			if (isAxiosError(e) && e.response) {
				setStatus?.(e.response.data.message);
			}
		}
	};

export default signUpThunk;
