import {MenuItem, MenuLink, MenuSection} from "@components/Menu";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import AuthService from "@services/auth/auth.service";
import {
	EDIT_PROFILE_ROUTE,
	PROFILE_ROUTE,
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
					<MenuLink
						onClick={handleClick}
						to={`${PROFILE_ROUTE}/${username}`}
						end
					>
						Your profile
					</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink onClick={handleClick} to={YOUR_PROJECTS_ROUTE} end>
						Your projects
					</MenuLink>
				</MenuItem>
			</MenuSection>
			<MenuSection>
				<MenuItem>
					<MenuLink onClick={handleClick} to={EDIT_PROFILE_ROUTE} end>
						Edit profile
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
