import fetchProfile from "../../api/fetchProfile";
import {setIsFetching, setProfile} from "../slice";

const fetchProfileThunk =
	(username: string) => async (dispatch: RootDispatch) => {
		dispatch(setIsFetching(true));
		try {
			const response = await fetchProfile(username);
			dispatch(setProfile(response.data));
		} finally {
			dispatch(setIsFetching(false));
		}
	};

export default fetchProfileThunk;
