import {setError} from "@shared/error";
import fetchUserProjects from "../../api/fetchUserProjects";
import {GetMultipleReqParams} from "../../api/types";
import defaultParams from "../../constants/defaultParams";
import {addProjects, setIsFetching} from "../projectsSlice";

const fetchMoreUserProjectsThunk =
	(params: GetMultipleReqParams = defaultParams) =>
	async (dispatch: RootDispatch) => {
		dispatch(setIsFetching(true));
		try {
			const response = await fetchUserProjects(params);

			dispatch(addProjects(response.data));
		} catch (e) {
			dispatch(setError());
		} finally {
			dispatch(setIsFetching(false));
		}
	};

export default fetchMoreUserProjectsThunk;
