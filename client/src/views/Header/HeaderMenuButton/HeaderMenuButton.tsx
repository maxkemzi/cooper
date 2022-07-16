import React, {Dispatch, FC, SetStateAction} from "react";
import {ReactComponent as ArrowDownIcon} from "@images/dropdown/arrow-down.svg";
import useTypedSelector from "@hooks/useTypedSelector";
import Avatar from "@components/Avatar/Avatar";
import StyledHeaderMenuButton from "./HeaderMenuButton.styled";

interface HeaderMenuButtonProps {
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
	isMenuOpen: boolean;
}

const HeaderMenuButton: FC<HeaderMenuButtonProps> = ({
	setIsMenuOpen,
	isMenuOpen
}) => {
	const avatarPath = useTypedSelector(state => state.authState.user.avatar);

	const toggleMenuIsOpen = () => setIsMenuOpen(!isMenuOpen);

	return (
		<StyledHeaderMenuButton onClick={toggleMenuIsOpen} type="button">
			<Avatar marginRight="4px" imagePath={avatarPath} />
			<ArrowDownIcon />
		</StyledHeaderMenuButton>
	);
};

export default HeaderMenuButton;
