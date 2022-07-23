import {Navbar, NavbarItem, NavbarList} from "@components/Navbar";
import NavbarMobile from "@components/NavbarMobile/NavbarMobile";
import useWindowSize from "@hooks/useWindowSize";
import React, {Dispatch, FC, memo, SetStateAction, useMemo} from "react";
import {headerNavbarItems} from "../../../data";

interface HeaderNavbarProps {
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
	isOpen?: boolean;
}

const HeaderNavbar: FC<HeaderNavbarProps> = memo(({isOpen, setIsOpen}) => {
	const {width} = useWindowSize();
	const navbarItems = useMemo(() => headerNavbarItems, []);
	const children = (
		<NavbarList
			gapDirection={width <= 768 ? "vertical" : "horizontal"}
			flexDirection={width <= 768 ? "column" : "row"}
			gap={width <= 768 ? "16px" : "40px"}
		>
			{navbarItems.map(({path, text, id}) => (
				<NavbarItem key={id} to={path} end>
					{text}
				</NavbarItem>
			))}
		</NavbarList>
	);

	if (width <= 768) {
		return (
			<NavbarMobile onClose={() => setIsOpen(false)} isOpen={isOpen}>
				{children}
			</NavbarMobile>
		);
	}

	return <Navbar>{children}</Navbar>;
});

export default HeaderNavbar;
