import {Navbar, NavbarItem, NavbarList} from "@components/Navbar";
import React, {FC} from "react";
import {headerNavbarItems} from "../../../data";

const HeaderNavbar: FC = () => (
	<Navbar>
		<NavbarList gap="40px">
			{headerNavbarItems.map(({path, text, id}) => (
				<NavbarItem key={id} to={path} end>
					{text}
				</NavbarItem>
			))}
		</NavbarList>
	</Navbar>
);

export default HeaderNavbar;
