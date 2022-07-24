import BurgerButton from "@components/BurgerButton/BurgerButton";
import Container from "@components/Container/Container";
import useTypedSelector from "@hooks/useTypedSelector";
import useWindowSize from "@hooks/useWindowSize";
import {getAuthIsAuth} from "@store/auth/auth.selectors";
import {HOME_ROUTE} from "@utils/constants/routeNames";
import ScreenSizes from "@utils/constants/screenSizes";
import {
	HeaderEndFlex,
	HeaderFlex,
	StyledHeader
} from "@views/Header/Header.styled";
import React, {FC, memo, useState} from "react";
import Logo from "../../components/Logo/Logo";
import HeaderButton from "./HeaderButton/HeaderButton";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import HeaderUserInfo from "./HeaderUserInfo/HeaderUserInfo";

interface HeaderProps {
	isAbsolute?: boolean;
}

const Header: FC<HeaderProps> = memo(({isAbsolute}) => {
	const {width} = useWindowSize();
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isAuth = useTypedSelector(getAuthIsAuth);
	const endElement = isAuth ? (
		<HeaderUserInfo isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
	) : (
		<HeaderButton />
	);

	const handleClick = () => setIsNavbarOpen(true);

	return (
		<StyledHeader isAbsolute={isAbsolute}>
			<Container>
				<HeaderFlex>
					<Logo linkPath={HOME_ROUTE} />
					<HeaderNavbar setIsOpen={setIsNavbarOpen} isOpen={isNavbarOpen} />
					{width <= ScreenSizes.TabletWidth ? (
						<HeaderEndFlex>
							{endElement}
							<BurgerButton marginLeft="16px" onClick={handleClick} />
						</HeaderEndFlex>
					) : (
						endElement
					)}
				</HeaderFlex>
			</Container>
		</StyledHeader>
	);
});

export default Header;
