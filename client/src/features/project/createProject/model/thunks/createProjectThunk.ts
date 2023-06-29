import {ProjectToApi} from "@entities/project";
import createProject from "@entities/project/api/createProject";
import {RouteName} from "@shared/constants";
import {redirect} from "@shared/redirect";
import {openSuccessToast} from "@shared/toast";

const createProjectThunk =
	(project: ProjectToApi) => async (dispatch: RootDispatch) => {
		await createProject(project);

		dispatch(openSuccessToast("Project has been created."));

		dispatch(redirect(RouteName.YOUR_PROJECTS));
	};

export default createProjectThunk;
