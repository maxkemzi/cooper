import {useListenClickOutside} from "@shared/lib";
import {useThemeMedia} from "@shared/theme";
import {
	BurgerButton,
	Navbar,
	NavbarItem,
	NavbarList,
	NavbarListProps
} from "@shared/ui";
import {AnimatePresence} from "framer-motion";
import {FC, MouseEventHandler, useRef, useState} from "react";
import navbarItems from "../../lib/data/navbarItems";
import {NavbarMobileStyled} from "./LayoutNavbar.styled";

const LayoutNavbar: FC = () => {
	const navbarMobileRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const media = useThemeMedia();
	const navbarListProps: NavbarListProps = {
		direction: media.md ? "column" : "row",
		gap: media.md ? "md" : "xl"
	};

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	useListenClickOutside(navbarMobileRef, handleClose);

	const renderNavbarItems = (onClick?: MouseEventHandler) =>
		navbarItems.map(({path, text, id}) => (
			<NavbarItem key={id} NavLinkProps={{onClick}} to={path} end>
				{text}
			</NavbarItem>
		));

	if (media.md) {
		return (
			<div ref={navbarMobileRef}>
				<BurgerButton onClick={handleOpen} />
				<AnimatePresence>
					{isOpen ? (
						<NavbarMobileStyled
							initial={{x: "100%"}}
							animate={{x: 0}}
							exit={{x: "100%"}}
							transition={{x: {ease: "easeOut", duration: 0.4}}}
						>
							<NavbarList {...navbarListProps}>
								{renderNavbarItems(handleClose)}
							</NavbarList>
						</NavbarMobileStyled>
					) : null}
				</AnimatePresence>
			</div>
		);
	}

	return <Navbar ListProps={navbarListProps}>{renderNavbarItems()}</Navbar>;
};

export default LayoutNavbar;
