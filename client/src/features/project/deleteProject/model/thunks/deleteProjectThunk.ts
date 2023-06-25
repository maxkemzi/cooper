import {setError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";
import deleteProject from "../../api/deleteProject";

const deleteProjectThunk = (id: string) => async (dispatch: RootDispatch) => {
	try {
		await deleteProject(id);
		dispatch(openSuccessToast("Project has been deleted."));
	} catch (e) {
		dispatch(setError());
	}
};

export default deleteProjectThunk;
