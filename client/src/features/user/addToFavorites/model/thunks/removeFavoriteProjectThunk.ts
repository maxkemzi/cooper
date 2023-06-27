import {setIsAddingToFavorites, editUser} from "@entities/user";
import {clearError, setError} from "@shared/error";
import removeFavoriteProject from "../../api/removeFavoriteProject";

const removeFavoriteProjectThunk =
	(projectId: string) => async (dispatch: RootDispatch) => {
		dispatch(clearError());
		dispatch(setIsAddingToFavorites(true));
		try {
			const response = await removeFavoriteProject(projectId);

			const newFavoriteProjects = response.data.favoriteProjects;

			dispatch(editUser({favoriteProjects: newFavoriteProjects}));
		} catch (e) {
			dispatch(setError());
		} finally {
			dispatch(setIsAddingToFavorites(false));
		}
	};

export default removeFavoriteProjectThunk;
