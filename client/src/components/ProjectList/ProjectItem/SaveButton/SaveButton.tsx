import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import UsersService from "@services/users/users.service";
import {LOGIN_ROUTE} from "@utils/constants/routeNames";
import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import {ReactComponent as HeartIcon} from "@images/project-item/heart.svg";
import useToast from "@hooks/useToast";
import StyledSaveButton from "./SaveButton.styled";

const SaveButton: FC<{id: number | string}> = ({id}) => {
	const dispatch = useTypedDispatch();
	const saves = useTypedSelector(state => state.authState?.user?.saves);
	const isSaving = useTypedSelector(state => state.projectsState.isSaving);
	const isAuth = useTypedSelector(state => state.authState.isAuth);
	const {showToast} = useToast();
	const navigate = useNavigate();

	const isSaved = () => (saves ? saves.some(save => save === id) : false);

	const handleClick = () => {
		if (!isAuth) {
			navigate(LOGIN_ROUTE);
		} else if (saves.some(save => save === id)) {
			dispatch(UsersService.unsave(id));
			showToast("success", "Successfully unsaved.");
		} else {
			dispatch(UsersService.save(id));
			showToast("success", "Successfully saved.");
		}
	};

	return (
		<StyledSaveButton
			onClick={handleClick}
			aria-label="Save button"
			isActive={isSaved()}
			type="button"
			disabled={isSaving}
		>
			<HeartIcon />
		</StyledSaveButton>
	);
};

export default SaveButton;
