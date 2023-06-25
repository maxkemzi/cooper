import {ThemingProps} from "@shared/theme";
import {ReactNode, forwardRef} from "react";
import {StyledComponentPropsWithRef} from "styled-components";
import {MenuStyled} from "./Menu.styled";

interface Props extends ThemingProps, StyledComponentPropsWithRef<"div"> {
	children: ReactNode;
}

const Menu = forwardRef<HTMLDivElement, Props>(({children, ...rest}, ref) => (
	<MenuStyled ref={ref} {...rest}>
		{children}
	</MenuStyled>
));

export default Menu;
