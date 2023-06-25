import {ProjectToApi} from "@entities/project";
import {RouteNames} from "@shared/constants";
import {setError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";
import {redirect} from "react-router-dom";
import createProject from "../../api/createProject";

const createProjectThunk =
	(project: ProjectToApi) => async (dispatch: RootDispatch) => {
		try {
			await createProject(project);
			dispatch(openSuccessToast("Project has been created."));
			// todo: fix redirect not working
			redirect(RouteNames.YourProjects);
		} catch (e) {
			dispatch(setError());
		}
	};

export default createProjectThunk;
