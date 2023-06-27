import {ProjectToApi} from "@entities/project";
import {RouteNames} from "@shared/constants";
import {openSuccessToast} from "@shared/toast";
import {redirect} from "react-router-dom";
import createProject from "../../api/createProject";

const createProjectThunk =
	(project: ProjectToApi) => async (dispatch: RootDispatch) => {
		await createProject(project);
		dispatch(openSuccessToast("Project has been created."));
		// todo: fix redirect not working
		redirect(RouteNames.YourProjects);
	};

export default createProjectThunk;
