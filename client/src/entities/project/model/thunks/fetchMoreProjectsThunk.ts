import {setError} from "@shared/error";
import fetchProjects from "../../api/fetchProjects";
import {GetMultipleReqParams} from "../../api/types";
import defaultParams from "../../constants/defaultParams";
import {addProjects, setIsFetching} from "../projectsSlice";

const fetchMoreProjectsThunk =
	(params: GetMultipleReqParams = defaultParams) =>
	async (dispatch: RootDispatch) => {
		dispatch(setIsFetching(true));
		try {
			const response = await fetchProjects(params);

			dispatch(addProjects(response.data));
		} catch (e) {
			dispatch(setError());
		} finally {
			dispatch(setIsFetching(false));
		}
	};

export default fetchMoreProjectsThunk;
