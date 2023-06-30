import {HeaderName} from "@shared/api";
import {AppError} from "@shared/error";
import fetchProjects from "../../api/fetchProjects";
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

const fetchProjectsThunk =
	(params: GetMultipleReqParams = defaultParams) =>
	async (dispatch: RootDispatch) => {
		if (params.page === 1) {
			dispatch(setIsFetching(true));
		} else {
			dispatch(setIsFetchingMore(true));
		}

		try {
			const response = await fetchProjects(params);

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
		} catch (e) {
			throw new AppError("Error fetching projects.");
		} finally {
			if (params.page === 1) {
				dispatch(setIsFetching(false));
			} else {
				dispatch(setIsFetchingMore(false));
			}
		}
	};

export default fetchProjectsThunk;
