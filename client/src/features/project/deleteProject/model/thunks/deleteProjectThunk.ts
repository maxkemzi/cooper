import {removeProject} from "@entities/project";
import {AppError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";
import deleteProject from "../../api/deleteProject";

const deleteProjectThunk = (id: string) => async (dispatch: RootDispatch) => {
	try {
		await deleteProject(id);

		dispatch(removeProject(id));
		dispatch(openSuccessToast("Project has been deleted."));
	} catch (e) {
		throw new AppError("Error deleting the project.");
	}
};

export default deleteProjectThunk;
