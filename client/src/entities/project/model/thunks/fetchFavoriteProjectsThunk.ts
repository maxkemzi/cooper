import {HeaderName} from "@shared/api";
import {setError} from "@shared/error";
import fetchFavoriteProjects from "../../api/fetchFavoriteProjects";
import {GetMultipleReqParams} from "../../api/types";
import defaultParams from "../../constants/defaultParams";
import {setIsFetching, setProjects, setTotalCount} from "../projectsSlice";

const fetchFavoriteProjectsThunk =
	(params: GetMultipleReqParams = defaultParams) =>
	async (dispatch: RootDispatch) => {
		dispatch(setIsFetching(true));
		try {
			const response = await fetchFavoriteProjects(params);

			dispatch(setProjects(response.data));

			const totalCount = Number(response.headers[HeaderName.TOTAL_COUNT]);
			dispatch(setTotalCount(totalCount));
		} catch (e) {
			dispatch(setError());
		} finally {
			dispatch(setIsFetching(false));
		}
	};

export default fetchFavoriteProjectsThunk;
