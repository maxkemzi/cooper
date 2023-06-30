import {AppError} from "@shared/error";
import fetchProject from "../../api/fetchProject";
import {setIsFetching, setProject} from "../projectSlice";

const fetchProjectThunk = (id: string) => async (dispatch: RootDispatch) => {
	dispatch(setIsFetching(true));
	try {
		const response = await fetchProject(id);
		dispatch(setProject(response.data));
	} catch (e) {
		throw new AppError("Error fetching project.");
	} finally {
		dispatch(setIsFetching(false));
	}
};

export default fetchProjectThunk;
