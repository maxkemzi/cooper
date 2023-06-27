import {ProjectToApi, editProject} from "@entities/project";
import {clearError, setError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";
import updateProject from "../../api/updateProject";

const editProjectThunk =
	(id: string, project: Partial<ProjectToApi>) =>
	async (dispatch: RootDispatch) => {
		dispatch(clearError());
		try {
			await updateProject(id, project);

			dispatch(editProject({id, project}));
			dispatch(openSuccessToast("Project has been edited."));
		} catch (e) {
			dispatch(setError());
		}
	};

export default editProjectThunk;
