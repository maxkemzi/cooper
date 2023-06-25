import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {InputHTMLAttributes, forwardRef, useState} from "react";
import {Icon, IconName} from "../../../../icons";
import Input from "../Input/Input";
import {ButtonStyled, PasswordInputStyled} from "./PasswordInput.styled";

interface Props extends ThemingProps, InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
	const {commonStyleProps, ...rest} = useCommonStyleProps(props);
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);

	const togglePasswordVisibility = () =>
		setPasswordIsVisible(!passwordIsVisible);

	const iconName: IconName = passwordIsVisible ? "eye" : "eyeOff";

	return (
		<PasswordInputStyled ref={ref} {...commonStyleProps}>
			<Input
				type={passwordIsVisible ? "text" : "password"}
				pr="xxxl"
				{...rest}
			/>
			<ButtonStyled onClick={togglePasswordVisibility} type="button">
				<Icon name={iconName} color="secondary" />
			</ButtonStyled>
		</PasswordInputStyled>
	);
});

export type {Props as PasswordInputProps};
export default PasswordInput;
