import {editUser, setIsAddingToFavorites} from "@entities/user";
import removeFavoriteProject from "../../api/removeFavoriteProject";

const removeFavoriteProjectThunk =
	(projectId: string) => async (dispatch: RootDispatch) => {
		dispatch(setIsAddingToFavorites(true));
		try {
			const response = await removeFavoriteProject(projectId);

			const newFavoriteProjects = response.data.favoriteProjects;

			dispatch(editUser({favoriteProjects: newFavoriteProjects}));
		} finally {
			dispatch(setIsAddingToFavorites(false));
		}
	};

export default removeFavoriteProjectThunk;
