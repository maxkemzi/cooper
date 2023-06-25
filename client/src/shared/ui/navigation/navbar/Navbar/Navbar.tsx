import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {HTMLAttributes, PropsWithChildren, forwardRef} from "react";
import NavbarList, {NavbarListProps} from "../NavbarList/NavbarList";
import {NavbarStyled} from "./Navbar.styled";

type Props = PropsWithChildren<
	ThemingProps &
		HTMLAttributes<HTMLElement> & {
			ListProps?: NavbarListProps;
		}
>;

const Navbar = forwardRef<HTMLElement, Props>((props, ref) => {
	const {children, ListProps, commonStyleProps, ...rest} =
		useCommonStyleProps(props);

	return (
		<NavbarStyled ref={ref} {...commonStyleProps} {...rest}>
			<NavbarList {...ListProps}>{children}</NavbarList>
		</NavbarStyled>
	);
});

export default Navbar;
