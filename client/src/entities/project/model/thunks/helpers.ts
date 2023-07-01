import {HeaderName} from "@shared/api";
import {GetMultipleReqParams, MultipleProjectsRes} from "../../api/types";
import {
	addProjects,
	resetError,
	resetProjects,
	setError,
	setIsFetching,
	setPage,
	setProjects,
	setTotalCount,
	setTotalPages
} from "../projectsSlice";
import {ERROR_MESSAGE} from "./constants";

const fetchPending =
	(params: GetMultipleReqParams) => (dispatch: RootDispatch) => {
		dispatch(setIsFetching(true));

		if (params.page === 1) {
			dispatch(resetProjects());
			dispatch(resetError());
		}
	};

const fetchSucceeded =
	(response: MultipleProjectsRes) => (dispatch: RootDispatch) => {
		const {data, headers} = response;

		dispatch(setIsFetching(false));

		const page = Number(headers[HeaderName.PAGE]);
		dispatch(setPage(page));

		const totalPages = Number(headers[HeaderName.TOTAL_PAGES]);
		dispatch(setTotalPages(totalPages));

		const totalCount = Number(headers[HeaderName.TOTAL_COUNT]);
		dispatch(setTotalCount(totalCount));

		if (page === 1) {
			dispatch(setProjects(data));
		} else {
			dispatch(addProjects(data));
		}
	};

const fetchFailed = (error?: string) => (dispatch: RootDispatch) => {
	dispatch(setIsFetching(false));

	dispatch(setError(error || ERROR_MESSAGE));

	dispatch(resetProjects());
};

export {fetchFailed, fetchPending, fetchSucceeded};
