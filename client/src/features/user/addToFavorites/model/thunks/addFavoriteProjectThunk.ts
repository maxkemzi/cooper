import {
	addFavoriteProject,
	editUser,
	setIsAddingToFavorites
} from "@entities/user";
import {AppError} from "@shared/error";
import {openSuccessToast} from "@shared/toast";

const addFavoriteProjectThunk =
	(projectId: string) => async (dispatch: RootDispatch) => {
		dispatch(setIsAddingToFavorites(true));
		try {
			const response = await addFavoriteProject(projectId);

			const newFavoriteProjects = response.data.favoriteProjects;
			dispatch(editUser({favoriteProjects: newFavoriteProjects}));
			dispatch(openSuccessToast("Successfully added to favorites."));
		} catch (e) {
			throw new AppError("Error adding to favorites.");
		} finally {
			dispatch(setIsAddingToFavorites(false));
		}
	};

export default addFavoriteProjectThunk;
