import {setIsAddingToFavorites, updateUser} from "@entities/user";
import {clearError, setError} from "@shared/error";
import addFavoriteProject from "../../api/addFavoriteProject";

const addFavoriteProjectThunk =
	(projectId: string) => async (dispatch: RootDispatch) => {
		dispatch(clearError());
		dispatch(setIsAddingToFavorites(true));
		try {
			const response = await addFavoriteProject(projectId);

			const newFavoriteProjects = response.data.favoriteProjects;

			dispatch(updateUser({favoriteProjects: newFavoriteProjects}));
		} catch (e) {
			dispatch(setError());
		} finally {
			dispatch(setIsAddingToFavorites(false));
		}
	};

export default addFavoriteProjectThunk;
