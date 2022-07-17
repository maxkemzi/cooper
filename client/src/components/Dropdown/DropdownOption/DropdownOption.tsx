import {DropdownOption as DropdownOptionInterface} from "@customTypes/store";
import React, {FC} from "react";
import {
	StyledDropdownOption,
	DropdownOptionButton
} from "./DropdownOption.styled";

interface DropdownOptionProps {
	id?: string | number;
	title: string;
	value: string;
	isActive?: boolean;
	onClick: (option: DropdownOptionInterface) => void;
}

const DropdownOption: FC<DropdownOptionProps> = ({
	isActive,
	id,
	title,
	value,
	onClick
}) => (
	<StyledDropdownOption isActive={isActive}>
		<DropdownOptionButton
			disabled={isActive}
			type="button"
			onClick={() => onClick({id, value, title})}
		>
			{title}
		</DropdownOptionButton>
	</StyledDropdownOption>
);

export default DropdownOption;
