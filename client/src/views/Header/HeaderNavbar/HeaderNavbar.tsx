import {Navbar, NavbarItem, NavbarList} from "@components/Navbar";
import NavbarMobile from "@components/NavbarMobile/NavbarMobile";
import useWindowSize from "@hooks/useWindowSize";
import ScreenSizes from "@utils/constants/screenSizes";
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
			gapDirection={
				width <= ScreenSizes.TabletWidth ? "vertical" : "horizontal"
			}
			flexDirection={width <= ScreenSizes.TabletWidth ? "column" : "row"}
			gap={width <= ScreenSizes.TabletWidth ? "16px" : "40px"}
		>
			{navbarItems.map(({path, text, id}) => (
				<NavbarItem key={id} to={path} end>
					{text}
				</NavbarItem>
			))}
		</NavbarList>
	);

	return width <= ScreenSizes.TabletWidth ? (
		<NavbarMobile onClose={() => setIsOpen(false)} isOpen={isOpen}>
			{children}
		</NavbarMobile>
	) : (
		<Navbar>{children}</Navbar>
	);
});

export default HeaderNavbar;
