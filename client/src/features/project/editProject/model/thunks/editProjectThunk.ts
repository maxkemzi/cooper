import {ProjectToApi, editProject} from "@entities/project";
import {openSuccessToast} from "@shared/toast";
import updateProject from "../../api/updateProject";

const editProjectThunk =
	(id: string, project: Partial<ProjectToApi>) =>
	async (dispatch: RootDispatch) => {
		await updateProject(id, project);

		dispatch(editProject({id, project}));
		dispatch(openSuccessToast("Project has been edited."));
	};

export default editProjectThunk;
