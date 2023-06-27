import {ProjectToApi} from "@entities/project";
import {RouteName} from "@shared/constants";
import {redirect} from "@shared/redirect";
import {openSuccessToast} from "@shared/toast";
import createProject from "../../api/createProject";

const createProjectThunk =
	(project: ProjectToApi) => async (dispatch: RootDispatch) => {
		await createProject(project);
		dispatch(openSuccessToast("Project has been created."));

		dispatch(redirect(RouteName.YOUR_PROJECTS));
	};

export default createProjectThunk;
