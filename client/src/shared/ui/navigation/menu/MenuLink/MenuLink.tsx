import {ThemingProps} from "@shared/theme";
import {forwardRef} from "react";
import {NavLink} from "react-router-dom";
import {StyledComponentPropsWithRef} from "styled-components";
import {MenuLinkStyled} from "./MenuLink.styled";

interface Props
	extends ThemingProps,
		StyledComponentPropsWithRef<typeof NavLink> {}

const MenuLink = forwardRef<HTMLAnchorElement, Props>(
	({children, ...rest}, ref) => (
		<MenuLinkStyled ref={ref} {...rest}>
			{children}
		</MenuLinkStyled>
	)
);

export default MenuLink;
