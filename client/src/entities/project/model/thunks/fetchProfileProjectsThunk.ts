import {HeaderName} from "@shared/api";
import fetchProfileProjects from "../../api/fetchProfileProjects";
import {
	setIsFetching,
	setPage,
	setProjects,
	setTotalCount,
	setTotalPages
} from "../projectsSlice";
import {GetMultipleReqParams} from "../../api/types";

const fetchProfileProjectsThunk =
	(username: string, params: GetMultipleReqParams) =>
	async (dispatch: RootDispatch) => {
		dispatch(setIsFetching(true));
		try {
			const response = await fetchProfileProjects(username, params);

			dispatch(setProjects(response.data));

			const page = Number(response.headers[HeaderName.PAGE]);
			dispatch(setPage(page));

			const totalPages = Number(response.headers[HeaderName.TOTAL_PAGES]);
			dispatch(setTotalPages(totalPages));

			const totalCount = Number(response.headers[HeaderName.TOTAL_COUNT]);
			dispatch(setTotalCount(totalCount));
		} finally {
			dispatch(setIsFetching(false));
		}
	};

export default fetchProfileProjectsThunk;
