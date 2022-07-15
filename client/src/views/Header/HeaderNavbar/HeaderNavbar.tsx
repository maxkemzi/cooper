import React, {FC} from "react";
import {NavbarItem, NavbarList, Navbar} from "@components/Navbar";
import {
	ABOUT_ME_ROUTE,
	HOME_ROUTE,
	PROJECTS_ROUTE
} from "@utils/constants/routeNames";

const HeaderNavbar: FC = () => (
	<Navbar>
		<NavbarList gap={40}>
			<NavbarItem to={HOME_ROUTE}>Home</NavbarItem>
			<NavbarItem to={PROJECTS_ROUTE}>Projects</NavbarItem>
			<NavbarItem to={ABOUT_ME_ROUTE}>Idea & contact</NavbarItem>
		</NavbarList>
	</Navbar>
);

export default HeaderNavbar;
