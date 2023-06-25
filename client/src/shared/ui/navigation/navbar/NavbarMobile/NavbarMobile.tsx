import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {HTMLAttributes, PropsWithChildren, forwardRef} from "react";
import {NavbarMobileStyled} from "./NavbarMobile.styled";
import {StyleProps} from "./type";
import NavbarList, {NavbarListProps} from "../NavbarList/NavbarList";

type Props = PropsWithChildren<
	ThemingProps &
		HTMLAttributes<HTMLElement> & {
			isOpen: boolean;
			ListProps?: NavbarListProps;
		}
>;

const NavbarMobile = forwardRef<HTMLElement, Props>((props, ref) => {
	const {children, isOpen, ListProps, commonStyleProps, ...rest} =
		useCommonStyleProps(props);

	const styleProps: StyleProps = {
		$isOpen: isOpen
	};

	return (
		<NavbarMobileStyled
			ref={ref}
			{...commonStyleProps}
			{...styleProps}
			{...rest}
		>
			<NavbarList {...ListProps}>{children}</NavbarList>
		</NavbarMobileStyled>
	);
});
export default NavbarMobile;
