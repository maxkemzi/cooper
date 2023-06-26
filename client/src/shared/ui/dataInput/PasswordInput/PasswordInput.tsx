import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {HTMLAttributes, forwardRef, useState} from "react";
import {Icon, IconName} from "../../icons";
import Input, {type InputProps} from "../Input/Input";
import {ButtonStyled, PasswordInputStyled} from "./PasswordInput.styled";

type Props = ThemingProps &
	HTMLAttributes<HTMLDivElement> & {
		InputProps?: Partial<Omit<InputProps, "type">>;
	};

const PasswordInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {InputProps, commonStyleProps, ...rest} = useCommonStyleProps(props);

	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(prev => !prev);

	const iconName: IconName = isVisible ? "eye" : "eyeOff";
	const inputType = isVisible ? "text" : "password";

	return (
		<PasswordInputStyled ref={ref} {...commonStyleProps} {...rest}>
			<Input pr="xxxl" {...InputProps} type={inputType} />
			<ButtonStyled onClick={toggleVisibility} type="button">
				<Icon name={iconName} color="secondary" />
			</ButtonStyled>
		</PasswordInputStyled>
	);
});

export type {Props as PasswordInputProps};
export default PasswordInput;
