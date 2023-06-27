import {removeProject} from "@entities/project";
import {clearError, setError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";
import deleteProject from "../../api/deleteProject";

const deleteProjectThunk = (id: string) => async (dispatch: RootDispatch) => {
	dispatch(clearError());
	try {
		await deleteProject(id);

		dispatch(removeProject(id));
		dispatch(openSuccessToast("Project has been deleted."));
	} catch (e) {
		dispatch(setError());
	}
};

export default deleteProjectThunk;
