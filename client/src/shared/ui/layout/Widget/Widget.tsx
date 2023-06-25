import {ThemingProps} from "@shared/theme";
import {ReactNode, forwardRef} from "react";
import {StyledComponentPropsWithRef} from "styled-components";
import {WidgetStyled} from "./Widget.styled";

interface Props extends ThemingProps, StyledComponentPropsWithRef<"div"> {
	children: ReactNode;
}

const Widget = forwardRef<HTMLDivElement, Props>(({children, ...rest}, ref) => (
	<WidgetStyled ref={ref} {...rest}>
		{children}
	</WidgetStyled>
));

export default Widget;
