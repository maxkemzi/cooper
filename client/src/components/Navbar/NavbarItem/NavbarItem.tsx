import React, {FC, ReactNode} from "react";
import {NavLinkProps} from "react-router-dom";
import NavbarLink from "./NavbarItem.styled";

export interface NavbarItemProps extends NavLinkProps {
	children: ReactNode;
}

const NavbarItem: FC<NavbarItemProps> = ({children, ...props}) => (
	<li>
		<NavbarLink {...props}>{children}</NavbarLink>
	</li>
);

export default NavbarItem;
