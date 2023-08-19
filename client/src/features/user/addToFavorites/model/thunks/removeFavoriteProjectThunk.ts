import {
	editUser,
	removeFavoriteProject,
	setIsAddingToFavorites
} from "@entities/user";
import {AppError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";

const removeFavoriteProjectThunk =
	(projectId: string) => async (dispatch: RootDispatch) => {
		dispatch(setIsAddingToFavorites(true));
		try {
			const response = await removeFavoriteProject(projectId);

			const newFavoriteProjects = response.data.favoriteProjects;
			dispatch(editUser({favoriteProjects: newFavoriteProjects}));
			dispatch(openSuccessToast("Successfully removed from favorites."));
		} catch (e) {
			throw new AppError("Error removing from favorites.");
		} finally {
			dispatch(setIsAddingToFavorites(false));
		}
	};

export default removeFavoriteProjectThunk;
