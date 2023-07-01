import {AppError} from "@shared/error";
import fetchFavoriteProjects from "../../api/fetchFavoriteProjects";
import {GetMultipleReqParams} from "../../api/types";
import {fetchFailed, fetchPending, fetchSucceeded} from "./helpers";
import {DEFAULT_PARAMS} from "./constants";

const fetchFavoriteProjectsThunk =
	(params: GetMultipleReqParams = DEFAULT_PARAMS) =>
	async (dispatch: RootDispatch) => {
		dispatch(fetchPending(params));
		try {
			const response = await fetchFavoriteProjects(params);

			dispatch(fetchSucceeded(response));
		} catch (e) {
			dispatch(fetchFailed());
			throw new AppError("Error fetching projects.");
		}
	};

export default fetchFavoriteProjectsThunk;
