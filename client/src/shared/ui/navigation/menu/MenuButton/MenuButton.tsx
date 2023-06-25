import {ThemingProps} from "@shared/theme";
import {forwardRef} from "react";
import {StyledComponentPropsWithRef} from "styled-components";
import {MenuButtonStyled} from "./MenuButton.styled";

interface Props extends ThemingProps, StyledComponentPropsWithRef<"button"> {}

const MenuButton = forwardRef<HTMLButtonElement, Props>(
	({children, type = "button", ...rest}, ref) => (
		<MenuButtonStyled ref={ref} type={type} {...rest}>
			{children}
		</MenuButtonStyled>
	)
);

export default MenuButton;
