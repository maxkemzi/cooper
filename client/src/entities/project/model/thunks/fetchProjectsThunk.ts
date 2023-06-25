import {HeaderName} from "@shared/api";
import {setError} from "@shared/error";
import fetchProjects from "../../api/fetchProjects";
import {GetMultipleReqParams} from "../../api/types";
import defaultParams from "../../constants/defaultParams";
import {setIsFetching, setProjects, setTotalCount} from "../projectsSlice";

const fetchProjectsThunk =
	(params: GetMultipleReqParams = defaultParams) =>
	async (dispatch: RootDispatch) => {
		dispatch(setIsFetching(true));
		try {
			const response = await fetchProjects(params);

			dispatch(setProjects(response.data));

			const totalCount = Number(response.headers[HeaderName.TOTAL_COUNT]);
			dispatch(setTotalCount(totalCount));
		} catch (e) {
			dispatch(setError());
		} finally {
			dispatch(setIsFetching(false));
		}
	};

export default fetchProjectsThunk;
