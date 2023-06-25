import {ProjectToApi} from "@entities/project";
import {setError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";
import updateProject from "../../api/updateProject";

const updateProjectThunk =
	(id: string, project: ProjectToApi) => async (dispatch: RootDispatch) => {
		try {
			await updateProject(id, project);
			dispatch(openSuccessToast("Project has been updated."));
		} catch (e) {
			dispatch(setError());
		}
	};

export default updateProjectThunk;
