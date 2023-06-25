import {ThemingProps} from "@shared/theme";
import {ReactNode, forwardRef} from "react";
import {StyledComponentPropsWithRef} from "styled-components";
import {MenuSectionStyled} from "./MenuSection.styled";

interface Props extends ThemingProps, StyledComponentPropsWithRef<"ul"> {
	children: ReactNode;
}

const MenuSection = forwardRef<HTMLUListElement, Props>(
	({children, ...rest}, ref) => (
		<MenuSectionStyled ref={ref} {...rest}>
			{children}
		</MenuSectionStyled>
	)
);

export default MenuSection;
