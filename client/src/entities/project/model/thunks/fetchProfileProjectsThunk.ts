import {AppError} from "@shared/error";
import fetchProfileProjects from "../../api/fetchProfileProjects";
import {GetMultipleReqParams} from "../../api/types";
import {DEFAULT_PARAMS} from "./constants";
import {fetchFailed, fetchPending, fetchSucceeded} from "./helpers";

const fetchProfileProjectsThunk =
	(username: string, params: GetMultipleReqParams = DEFAULT_PARAMS) =>
	async (dispatch: RootDispatch) => {
		dispatch(fetchPending(params));
		try {
			const response = await fetchProfileProjects(username, params);

			dispatch(fetchSucceeded(response));
		} catch (e) {
			dispatch(fetchFailed());
			throw new AppError("Error fetching projects.");
		}
	};

export default fetchProfileProjectsThunk;
