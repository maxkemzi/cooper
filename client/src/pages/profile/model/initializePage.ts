import {fetchProfileThunk} from "@entities/profile";
import {fetchProfileProjectsThunk} from "@entities/project";

const initializePage = (username: string) => (dispatch: RootDispatch) =>
	Promise.all([
		dispatch(fetchProfileThunk(username)),
		dispatch(fetchProfileProjectsThunk(username, {limit: 4, page: 1}))
	]);

export default initializePage;
