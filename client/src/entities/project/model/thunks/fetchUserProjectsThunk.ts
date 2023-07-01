import {AppError} from "@shared/error";
import fetchUserProjects from "../../api/fetchUserProjects";
import {GetMultipleReqParams} from "../../api/types";
import {DEFAULT_PARAMS} from "./constants";
import {fetchFailed, fetchPending, fetchSucceeded} from "./helpers";

const fetchUserProjectsThunk =
	(params: GetMultipleReqParams = DEFAULT_PARAMS) =>
	async (dispatch: RootDispatch) => {
		dispatch(fetchPending(params));
		try {
			const response = await fetchUserProjects(params);

			dispatch(fetchSucceeded(response));
		} catch (e) {
			dispatch(fetchFailed());
			throw new AppError("Error fetching projects.");
		}
	};

export default fetchUserProjectsThunk;
