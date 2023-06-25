import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {ButtonHTMLAttributes, forwardRef} from "react";
import {BurgerButtonStyled} from "./BurgerButton.styled";

interface Props extends ThemingProps, ButtonHTMLAttributes<HTMLButtonElement> {}

const BurgerButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
	const {
		type = "button",
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	return (
		<BurgerButtonStyled ref={ref} type={type} {...commonStyleProps} {...rest}>
			<span />
		</BurgerButtonStyled>
	);
});

export default BurgerButton;
