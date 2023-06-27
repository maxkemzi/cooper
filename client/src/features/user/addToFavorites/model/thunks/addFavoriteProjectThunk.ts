import {editUser, setIsAddingToFavorites} from "@entities/user";
import addFavoriteProject from "../../api/addFavoriteProject";

const addFavoriteProjectThunk =
	(projectId: string) => async (dispatch: RootDispatch) => {
		dispatch(setIsAddingToFavorites(true));
		try {
			const response = await addFavoriteProject(projectId);

			const newFavoriteProjects = response.data.favoriteProjects;

			dispatch(editUser({favoriteProjects: newFavoriteProjects}));
		} finally {
			dispatch(setIsAddingToFavorites(false));
		}
	};

export default addFavoriteProjectThunk;
