import {setError} from "@shared/error";
import fetchFavoriteProjects from "../../api/fetchFavoriteProjects";
import {GetMultipleReqParams} from "../../api/types";
import defaultParams from "../../constants/defaultParams";
import {addProjects, setIsFetching} from "../projectsSlice";

const fetchMoreFavoriteProjectsThunk =
	(params: GetMultipleReqParams = defaultParams) =>
	async (dispatch: RootDispatch) => {
		dispatch(setIsFetching(true));
		try {
			const response = await fetchFavoriteProjects(params);

			dispatch(addProjects(response.data));
		} catch (e) {
			dispatch(setError());
		} finally {
			dispatch(setIsFetching(false));
		}
	};

export default fetchMoreFavoriteProjectsThunk;
