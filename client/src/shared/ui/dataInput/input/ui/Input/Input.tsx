import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {InputHTMLAttributes, forwardRef} from "react";
import {InputStyled} from "./Input.styled";

interface Props extends ThemingProps, InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
	const {type, commonStyleProps, ...rest} = useCommonStyleProps(props);

	return <InputStyled ref={ref} {...commonStyleProps} {...rest} />;
});

export type {Props as InputProps};
export default Input;
