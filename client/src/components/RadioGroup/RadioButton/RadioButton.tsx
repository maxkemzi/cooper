import React, {ChangeEventHandler, FC} from "react";
import {
	RadioButtonLabel,
	RadioButtonFake,
	RadioButtonInput
} from "./RadioButton.styled";

interface RadioBtnProps {
	text: string;
	name?: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	value: string;
	checked: boolean;
}

const RadioButton: FC<RadioBtnProps> = ({
	text,
	name,
	onChange,
	value,
	checked
}) => (
	<RadioButtonLabel htmlFor={value}>
		<RadioButtonInput
			id={value}
			type="radio"
			name={name}
			onChange={onChange}
			value={value}
			checked={checked}
		/>
		<RadioButtonFake />
		<span>{text}</span>
	</RadioButtonLabel>
);

export default RadioButton;
