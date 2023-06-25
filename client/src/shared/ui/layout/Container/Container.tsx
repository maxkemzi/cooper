import {ThemingProps} from "@shared/theme";
import {ReactNode, forwardRef} from "react";
import {StyledComponentPropsWithRef} from "styled-components";
import {ContainerStyled} from "./Container.styled";

interface Props extends ThemingProps, StyledComponentPropsWithRef<"div"> {
	children: ReactNode;
}

const Container = forwardRef<HTMLDivElement, Props>(
	({children, ...rest}, ref) => (
		<ContainerStyled ref={ref} {...rest}>
			{children}
		</ContainerStyled>
	)
);

export default Container;
