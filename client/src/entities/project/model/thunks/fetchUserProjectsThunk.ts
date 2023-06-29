import {HeaderName} from "@shared/api";
import fetchUserProjects from "../../api/fetchUserProjects";
import {GetMultipleReqParams} from "../../api/types";
import defaultParams from "../../constants/defaultParams";
import {
	addProjects,
	setIsFetching,
	setIsFetchingMore,
	setPage,
	setProjects,
	setTotalCount,
	setTotalPages
} from "../projectsSlice";

const fetchUserProjectsThunk =
	(params: GetMultipleReqParams = defaultParams) =>
	async (dispatch: RootDispatch) => {
		if (params.page === 1) {
			dispatch(setIsFetching(true));
		} else {
			dispatch(setIsFetchingMore(true));
		}
		try {
			const response = await fetchUserProjects(params);

			if (params.page === 1) {
				dispatch(setProjects(response.data));
			} else {
				dispatch(addProjects(response.data));
			}

			const page = Number(response.headers[HeaderName.PAGE]);
			dispatch(setPage(page));

			const totalPages = Number(response.headers[HeaderName.TOTAL_PAGES]);
			dispatch(setTotalPages(totalPages));

			const totalCount = Number(response.headers[HeaderName.TOTAL_COUNT]);
			dispatch(setTotalCount(totalCount));
		} finally {
			if (params.page === 1) {
				dispatch(setIsFetching(false));
			} else {
				dispatch(setIsFetchingMore(false));
			}
		}
	};

export default fetchUserProjectsThunk;
