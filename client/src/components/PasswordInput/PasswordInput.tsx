import React, {FC, InputHTMLAttributes, memo, useState} from "react";
import {ReactComponent as OpenedEyeIcon} from "@images/auth/eye.svg";
import {ReactComponent as ClosedEyeIcon} from "@images/auth/closed-eye.svg";
import {Wrapper, StyledPasswordInput, Button} from "./PasswordInput.styled";

const PasswordInput: FC<InputHTMLAttributes<HTMLInputElement>> = memo(props => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	return (
		<Wrapper>
			<StyledPasswordInput
				{...props}
				type={isPasswordVisible ? "text" : "password"}
			/>
			<Button onClick={togglePasswordVisibility} type="button">
				{isPasswordVisible ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
			</Button>
		</Wrapper>
	);
});

export default PasswordInput;
