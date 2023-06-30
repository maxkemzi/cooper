import {AppError} from "@shared/error";
import fetchProfile from "../../api/fetchProfile";
import {setIsFetching, setProfile} from "../slice";

const fetchProfileThunk =
	(username: string) => async (dispatch: RootDispatch) => {
		dispatch(setIsFetching(true));
		try {
			const response = await fetchProfile(username);
			dispatch(setProfile(response.data));
		} catch (e) {
			throw new AppError("Error fetching profile.");
		} finally {
			dispatch(setIsFetching(false));
		}
	};

export default fetchProfileThunk;
