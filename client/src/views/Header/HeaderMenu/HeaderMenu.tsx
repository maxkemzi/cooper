import {Menu, MenuItem, MenuLink, MenuSection} from "@components/Menu";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import AuthService from "@services/auth/auth.service";
import {
	SETTINGS_ROUTE,
	YOUR_PROFILE_ROUTE,
	YOUR_PROJECTS_ROUTE
} from "@utils/constants/routeNames";
import {HeaderMenuTitle} from "@views/Header/Header.styled";
import React, {FC} from "react";

const HeaderMenu: FC = () => {
	const username = useTypedSelector(state => state.authState.user.username);
	const dispatch = useTypedDispatch();

	const handleClick = () => {
		dispatch(AuthService.logout());
	};

	return (
		<Menu>
			<MenuSection>
				<HeaderMenuTitle>
					Logged in as <br /> <span>{username}</span>
				</HeaderMenuTitle>
			</MenuSection>
			<MenuSection>
				<MenuItem>
					<MenuLink to={YOUR_PROFILE_ROUTE}>Your profile</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink to={YOUR_PROJECTS_ROUTE}>Your projects</MenuLink>
				</MenuItem>
			</MenuSection>
			<MenuSection>
				<MenuItem>
					<MenuLink to={SETTINGS_ROUTE}>Settings</MenuLink>
				</MenuItem>
			</MenuSection>
			<MenuSection>
				<MenuItem>
					<MenuLink onClick={handleClick} as="button" type="button">
						Log out
					</MenuLink>
				</MenuItem>
			</MenuSection>
		</Menu>
	);
};

export default HeaderMenu;
