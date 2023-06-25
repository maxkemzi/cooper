import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {LiHTMLAttributes, forwardRef} from "react";
import {NavLinkProps as NavLinkPropsType, To} from "react-router-dom";
import {LinkStyled, NavbarItemStyled} from "./NavbarItem.styled";

type Props = ThemingProps &
	LiHTMLAttributes<HTMLLIElement> & {
		to: To;
		end?: boolean;
		NavLinkProps?: Omit<NavLinkPropsType, "to" | "end">;
	};

const NavbarItem = forwardRef<HTMLLIElement, Props>((props, ref) => {
	const {children, to, end, commonStyleProps, NavLinkProps, ...rest} =
		useCommonStyleProps(props);

	return (
		<NavbarItemStyled ref={ref} {...commonStyleProps} {...rest}>
			<LinkStyled to={to} end={end} {...NavLinkProps}>
				{children}
			</LinkStyled>
		</NavbarItemStyled>
	);
});

export default NavbarItem;
