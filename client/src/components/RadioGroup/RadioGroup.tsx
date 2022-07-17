import {MarginProps} from "@customTypes/styled";
import React, {Children, FC, ReactElement, ReactNode} from "react";
import {
	RadioGroupFlex,
	RadioGroupTitle,
	StyledRadioGroup
} from "./RadioGroup.styled";

interface RadioGroupProps extends MarginProps {
	title: string;
	name: string;
	children: ReactNode;
}

const RadioGroup: FC<RadioGroupProps> = ({title, children, name, ...props}) => (
	<StyledRadioGroup {...props}>
		<RadioGroupTitle>{title}</RadioGroupTitle>
		<RadioGroupFlex>
			{Children.map(children, child =>
				React.cloneElement(child as ReactElement, {name})
			)}
		</RadioGroupFlex>
	</StyledRadioGroup>
);

export default RadioGroup;
