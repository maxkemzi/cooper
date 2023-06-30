import {
	addFavoriteProject,
	editUser,
	setIsAddingToFavorites
} from "@entities/user";
import {AppError} from "@shared/error";

const addFavoriteProjectThunk =
	(projectId: string) => async (dispatch: RootDispatch) => {
		dispatch(setIsAddingToFavorites(true));
		try {
			const response = await addFavoriteProject(projectId);

			const newFavoriteProjects = response.data.favoriteProjects;

			dispatch(editUser({favoriteProjects: newFavoriteProjects}));
		} catch (e) {
			throw new AppError("Error adding to favorites.");
		} finally {
			dispatch(setIsAddingToFavorites(false));
		}
	};

export default addFavoriteProjectThunk;
