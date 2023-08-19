import {
	selectIsAddingToFavorites,
	selectUserFavoriteProjects
} from "@entities/user";
import {selectIsAuth} from "@features/auth";
import {RouteName} from "@shared/constants";
import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {Icon} from "@shared/ui";
import {FC} from "react";
import {useNavigate} from "react-router-dom";
import addFavoriteProjectThunk from "../../model/thunks/addFavoriteProjectThunk";
import removeFavoriteProjectThunk from "../../model/thunks/removeFavoriteProjectThunk";
import {StyledAddToFavoritesButton} from "./AddToFavoritesButton.styled";

interface Props {
	projectId: string;
}

const AddToFavoritesButton: FC<Props> = ({projectId}) => {
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();

	const favorites = useTypedSelector(selectUserFavoriteProjects);
	const isAddingToFavorites = useTypedSelector(selectIsAddingToFavorites);
	const isAuth = useTypedSelector(selectIsAuth);

	const inFavorites =
		favorites != null ? favorites.some(id => id === projectId) : false;

	const handleClick = () => {
		if (!isAuth) {
			navigate(RouteName.LOGIN);
			return;
		}

		if (inFavorites) {
			dispatch(removeFavoriteProjectThunk(projectId));
		} else {
			dispatch(addFavoriteProjectThunk(projectId));
		}
	};

	return (
		<StyledAddToFavoritesButton
			onClick={handleClick}
			aria-label="Save button"
			type="button"
			disabled={isAddingToFavorites}
		>
			<Icon
				size="md"
				color="secondary"
				name="heart"
				variant={inFavorites ? "solid" : "outline"}
			/>
		</StyledAddToFavoritesButton>
	);
};

export default AddToFavoritesButton;
