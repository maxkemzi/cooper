import {HeaderName} from "@shared/api";
import fetchUserProjects from "../../api/fetchUserProjects";
import {GetMultipleReqParams} from "../../api/types";
import defaultParams from "../../constants/defaultParams";
import {setIsFetching, setProjects, setTotalCount} from "../projectsSlice";

const fetchUserProjectsThunk =
	(params: GetMultipleReqParams = defaultParams) =>
	async (dispatch: RootDispatch) => {
		dispatch(setIsFetching(true));
		try {
			const response = await fetchUserProjects(params);

			dispatch(setProjects(response.data));

			const totalCount = Number(response.headers[HeaderName.TOTAL_COUNT]);
			dispatch(setTotalCount(totalCount));
		} finally {
			dispatch(setIsFetching(false));
		}
	};

export default fetchUserProjectsThunk;
