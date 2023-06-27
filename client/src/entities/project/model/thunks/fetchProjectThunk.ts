import fetchProject from "../../api/fetchProject";
import {setIsFetching, setProject} from "../projectSlice";

const fetchProjectThunk = (id: string) => async (dispatch: RootDispatch) => {
	dispatch(setIsFetching(true));
	try {
		const response = await fetchProject(id);
		dispatch(setProject(response.data));
	} finally {
		dispatch(setIsFetching(false));
	}
};

export default fetchProjectThunk;
