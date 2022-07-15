import React, {FC, ReactNode} from "react";
import {RadioGroupFlex, RadioGroupTitle} from "./RadioGroup.styled";

interface RadioGroupProps {
	title: string;
	children: ReactNode;
}

const RadioGroup: FC<RadioGroupProps> = ({title, children}) => (
	<div>
		<RadioGroupTitle>{title}</RadioGroupTitle>
		<RadioGroupFlex>{children}</RadioGroupFlex>
	</div>
);

export default RadioGroup;
