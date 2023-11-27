import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {ReactNode, forwardRef} from "react";
import {StyledComponentPropsWithRef} from "styled-components";
import {WidgetStyled} from "./Widget.styled";

interface Props extends ThemingProps, StyledComponentPropsWithRef<"div"> {
	children: ReactNode;
}

const Widget = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {children, commonStyleProps, ...rest} = useCommonStyleProps(props);

	return (
		<WidgetStyled ref={ref} {...commonStyleProps} {...rest}>
			{children}
		</WidgetStyled>
	);
});

export default Widget;
