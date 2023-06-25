import {ThemingProps} from "@shared/theme";
import {ReactNode, forwardRef} from "react";
import {StyledComponentPropsWithRef} from "styled-components";
import {MenuItemStyled} from "./MenuItem.styled";

interface Props extends ThemingProps, StyledComponentPropsWithRef<"li"> {
	children: ReactNode;
}

const MenuItem = forwardRef<HTMLLIElement, Props>(
	({children, ...rest}, ref) => (
		<MenuItemStyled ref={ref} {...rest}>
			{children}
		</MenuItemStyled>
	)
);

export default MenuItem;
