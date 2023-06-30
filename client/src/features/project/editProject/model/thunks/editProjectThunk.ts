import {
	ProjectToApi,
	editProject,
	triggerProjectsRefetch,
	updateProject
} from "@entities/project";
import {AppError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";

const editProjectThunk =
	(id: string, project: Partial<ProjectToApi>) =>
	async (dispatch: RootDispatch) => {
		try {
			await updateProject(id, project);

			dispatch(editProject({id, project}));
			dispatch(triggerProjectsRefetch());
			dispatch(openSuccessToast("Project has been edited."));
		} catch (e) {
			throw new AppError("Error editing the project.");
		}
	};

export default editProjectThunk;
