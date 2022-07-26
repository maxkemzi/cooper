import useToast from "@hooks/useToast";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import {ReactComponent as HeartIcon} from "@images/project-item/heart.svg";
import UsersService from "@services/users/users.service";
import {getAuthIsAuth, getAuthUserFavorites} from "@store/auth/auth.selectors";
import {getProjectsIsAddingToFavorites} from "@store/projects/projects.selectors";
import {LOGIN_ROUTE} from "@utils/constants/routeNames";
import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import StyledFavoriteButton from "./FavoriteButton.styled";

const FavoriteButton: FC<{id: number | string}> = ({id}) => {
	const dispatch = useTypedDispatch();
	const {showToast} = useToast();
	const navigate = useNavigate();

	// Selectors
	const favorites = useTypedSelector(getAuthUserFavorites);
	const isAddingToFavorites = useTypedSelector(getProjectsIsAddingToFavorites);
	const isAuth = useTypedSelector(getAuthIsAuth);

	const isInFavorites = () =>
		favorites ? favorites.some(item => item === id) : false;

	const handleClick = () => {
		if (!isAuth) {
			navigate(LOGIN_ROUTE);
		} else if (favorites.some(item => item === id)) {
			dispatch(UsersService.removeFromFavorites(id));
			showToast("success", "Successfully removed from favorites.");
		} else {
			dispatch(UsersService.addToFavorites(id));
			showToast("success", "Successfully added to favorites.");
		}
	};

	return (
		<StyledFavoriteButton
			onClick={handleClick}
			aria-label="Save button"
			isActive={isInFavorites()}
			type="button"
			disabled={isAddingToFavorites}
		>
			<HeartIcon />
		</StyledFavoriteButton>
	);
};

export default FavoriteButton;
