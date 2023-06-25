import {fetchProfileThunk} from "@entities/profile";
import {fetchProfileProjectsThunk} from "@entities/project";

const initializePage = (username: string) => (dispatch: RootDispatch) =>
	Promise.all([
		dispatch(fetchProfileThunk(username)),
		dispatch(fetchProfileProjectsThunk(username))
	]);

export default initializePage;
