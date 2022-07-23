import useListenClickOutside from "@hooks/useListenClickOutside";
import React, {FC, ReactNode, useRef} from "react";
import StyledNavbarMobile from "./NavbarMobile.styled";

interface NavbarMobileProps {
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

const NavbarMobile: FC<NavbarMobileProps> = ({children, isOpen, onClose}) => {
	const parentRef = useRef(null);

	useListenClickOutside(parentRef, onClose);

	return (
		<StyledNavbarMobile ref={parentRef} isOpen={isOpen}>
			{children}
		</StyledNavbarMobile>
	);
};

export default NavbarMobile;
