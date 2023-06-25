import {ScreenWidths} from "@shared/constants";
import {useListenClickOutside, useWindowSize} from "@shared/lib";
import {Navbar, NavbarItem, NavbarListProps, NavbarMobile} from "@shared/ui";
import {FC, useRef, useState} from "react";
import navbarItems from "../../lib/data/navbarItems";

const LayoutNavbar: FC = () => {
	const navbarMobileRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const {width} = useWindowSize();
	const navbarListProps: NavbarListProps = {
		direction: width <= ScreenWidths.Tablet ? "column" : "row",
		gap: width <= ScreenWidths.Tablet ? "md" : "xl"
	};

	const handleClose = () => setIsOpen(false);

	useListenClickOutside(navbarMobileRef, handleClose);

	const navbarItemsJSX = navbarItems.map(({path, text, id}) => (
		<NavbarItem key={id} to={path} end>
			{text}
		</NavbarItem>
	));

	if (width <= ScreenWidths.Tablet) {
		return (
			<NavbarMobile
				ref={navbarMobileRef}
				isOpen={isOpen}
				ListProps={navbarListProps}
			>
				{navbarItemsJSX}
			</NavbarMobile>
		);
	}

	return <Navbar ListProps={navbarListProps}>{navbarItemsJSX}</Navbar>;
};

export default LayoutNavbar;
