import React, {FC, useState} from "react";
import {HeaderFlex, StyledHeader} from "@views/Header/Header.styled";
import Container from "@components/Container/Container";
import {HOME_ROUTE} from "@utils/constants/routeNames";
import useTypedSelector from "@hooks/useTypedSelector";
import Logo from "../../components/Logo/Logo";
import HeaderUserInfo from "./HeaderUserInfo/HeaderUserInfo";
import HeaderNavbar from "./HeaderNavbar/HeaderNavbar";
import HeaderBtn from "./HeaderButton/HeaderButton";

interface HeaderProps {
	isAbsolute?: boolean;
}

const Header: FC<HeaderProps> = ({isAbsolute}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isAuth = useTypedSelector(state => state.authState.isAuth);

	return (
		<StyledHeader isAbsolute={isAbsolute}>
			<Container>
				<HeaderFlex>
					<Logo linkPath={HOME_ROUTE} />
					<HeaderNavbar />
					{isAuth ? (
						<HeaderUserInfo
							isMenuOpen={isMenuOpen}
							setIsMenuOpen={setIsMenuOpen}
						/>
					) : (
						<HeaderBtn />
					)}
				</HeaderFlex>
			</Container>
		</StyledHeader>
	);
};

export default Header;
