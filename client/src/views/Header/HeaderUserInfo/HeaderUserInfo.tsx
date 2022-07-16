import React, {Dispatch, FC, SetStateAction, useRef} from "react";
import {CREATE_ROUTE} from "@utils/constants/routeNames";
import HeaderMenuButton from "@views/Header/HeaderMenuButton/HeaderMenuButton";
import HeaderMenu from "@views/Header/HeaderMenu/HeaderMenu";
import PlusIcon from "@icons/PlusIcon/PlusIcon";
import useListenClickOutside from "@hooks/useListenClickOutside";
import {HeaderCreateLink, StyledHeaderUserInfo} from "./HeaderUserInfo.styled";

interface HeaderUserInfoProps {
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
	isMenuOpen: boolean;
}

const HeaderUserInfo: FC<HeaderUserInfoProps> = ({
	setIsMenuOpen,
	isMenuOpen
}) => {
	const ref = useRef(null);

	useListenClickOutside(ref, () => setIsMenuOpen(false));

	return (
		<StyledHeaderUserInfo ref={ref}>
			<HeaderCreateLink to={CREATE_ROUTE}>
				<PlusIcon />
			</HeaderCreateLink>
			<HeaderMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			{isMenuOpen && <HeaderMenu setIsOpen={setIsMenuOpen} />}
		</StyledHeaderUserInfo>
	);
};

export default HeaderUserInfo;
