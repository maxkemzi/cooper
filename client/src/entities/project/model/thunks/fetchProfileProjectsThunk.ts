import {HeaderName} from "@shared/api";
import {setError} from "@shared/error";
import fetchProfileProjects from "../../api/fetchProfileProjects";
import {setIsFetching, setProjects, setTotalCount} from "../projectsSlice";

const fetchProfileProjectsThunk =
	(username: string) => async (dispatch: RootDispatch) => {
		dispatch(setIsFetching(true));
		try {
			const response = await fetchProfileProjects(username);

			dispatch(setProjects(response.data));

			const totalCount = Number(response.headers[HeaderName.TOTAL_COUNT]);
			dispatch(setTotalCount(totalCount));
		} catch (e) {
			dispatch(setError());
		} finally {
			dispatch(setIsFetching(false));
		}
	};

export default fetchProfileProjectsThunk;
