import React, {Dispatch, FC, SetStateAction} from "react";
import {HeaderAvatar, StyledHeaderMenuBtn} from "@views/Header/Header.styled";
import {ReactComponent as ArrowDownIcon} from "@images/dropdown/arrow-down.svg";
import useTypedSelector from "@hooks/useTypedSelector";

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
		<StyledHeaderMenuBtn onClick={toggleMenuIsOpen} type="button">
			<HeaderAvatar imagePath={avatarPath} />
			<ArrowDownIcon />
		</StyledHeaderMenuBtn>
	);
};

export default HeaderMenuButton;
