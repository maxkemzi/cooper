import {MarginProps} from "@customTypes/styled";
import React, {ButtonHTMLAttributes, FC} from "react";
import StyledBurgerButton from "./BurgerButton.styled";

const BurgerButton: FC<
	ButtonHTMLAttributes<HTMLButtonElement> & MarginProps
> = props => (
	<StyledBurgerButton type="button" {...props}>
		<span />
	</StyledBurgerButton>
);

export default BurgerButton;
