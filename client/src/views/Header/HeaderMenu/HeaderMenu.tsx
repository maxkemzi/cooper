import {MenuItem, MenuLink, MenuSection} from "@components/Menu";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import AuthService from "@services/auth/auth.service";
import {
	PROFILE_ROUTE,
	SETTINGS_ROUTE,
	YOUR_PROJECTS_ROUTE
} from "@utils/constants/routeNames";
import React, {Dispatch, FC, SetStateAction} from "react";
import {HeaderMenuTitle, StyledHeaderMenu} from "./HeaderMenu.styled";

interface HeaderMenuProps {
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const HeaderMenu: FC<HeaderMenuProps> = ({setIsOpen}) => {
	const username = useTypedSelector(state => state.authState.user.username);
	const dispatch = useTypedDispatch();

	// Close menu on link click
	const handleClick = () => setIsOpen(false);

	const handleLogOut = () => {
		dispatch(AuthService.logout());
		handleClick();
	};

	return (
		<StyledHeaderMenu>
			<MenuSection>
				<HeaderMenuTitle>
					Logged in as <br /> <span>{username}</span>
				</HeaderMenuTitle>
			</MenuSection>
			<MenuSection>
				<MenuItem>
					<MenuLink onClick={handleClick} to={`${PROFILE_ROUTE}/${username}`}>
						Your profile
					</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink onClick={handleClick} to={YOUR_PROJECTS_ROUTE}>
						Your projects
					</MenuLink>
				</MenuItem>
			</MenuSection>
			<MenuSection>
				<MenuItem>
					<MenuLink onClick={handleClick} to={SETTINGS_ROUTE}>
						Settings
					</MenuLink>
				</MenuItem>
			</MenuSection>
			<MenuSection>
				<MenuItem>
					<MenuLink onClick={handleLogOut} as="button" type="button">
						Log out
					</MenuLink>
				</MenuItem>
			</MenuSection>
		</StyledHeaderMenu>
	);
};

export default HeaderMenu;
