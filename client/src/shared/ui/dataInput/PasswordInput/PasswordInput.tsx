import {useCommonStyleProps} from "@shared/theme";
import {forwardRef, useState} from "react";
import {Icon, IconName} from "../../icons";
import Input, {type InputProps} from "../Input/Input";
import {ButtonStyled} from "./PasswordInput.styled";

const PasswordInput = forwardRef<
	HTMLDivElement,
	Omit<InputProps, "endSlot" | "startSlot">
>((props, ref) => {
	const {InputProps, commonStyleProps, ...rest} = useCommonStyleProps(props);

	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(prev => !prev);

	const iconName: IconName = isVisible ? "eye" : "eyeOff";
	const inputType = isVisible ? "text" : "password";

	return (
		<Input
			ref={ref}
			gap="lg"
			endSlot={
				<ButtonStyled onClick={toggleVisibility} type="button">
					<Icon name={iconName} color="secondary" />
				</ButtonStyled>
			}
			InputProps={{
				type: inputType,
				...InputProps
			}}
			{...rest}
		/>
	);
});

export type {InputProps as PasswordInputProps};
export default PasswordInput;
