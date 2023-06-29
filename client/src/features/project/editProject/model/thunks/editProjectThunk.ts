import {
	ProjectToApi,
	editProject,
	triggerProjectsRefetch,
	updateProject
} from "@entities/project";
import {openSuccessToast} from "@shared/toast";

const editProjectThunk =
	(id: string, project: Partial<ProjectToApi>) =>
	async (dispatch: RootDispatch) => {
		await updateProject(id, project);

		dispatch(editProject({id, project}));
		dispatch(triggerProjectsRefetch());
		dispatch(openSuccessToast("Project has been edited."));
	};

export default editProjectThunk;
