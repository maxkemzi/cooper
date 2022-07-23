import {DropdownOption as DropdownOptionInterface} from "@customTypes/store";
import React, {FC, memo} from "react";
import {
	DropdownOptionButton,
	StyledDropdownOption
} from "./DropdownOption.styled";

interface DropdownOptionProps {
	id?: string | number;
	title: string;
	value: string;
	isActive?: boolean;
	onClick: (option: DropdownOptionInterface) => void;
	disabled?: boolean;
}

const DropdownOption: FC<DropdownOptionProps> = memo(
	({isActive, disabled, id, title, value, onClick}) => (
		<StyledDropdownOption isActive={isActive}>
			<DropdownOptionButton
				disabled={disabled}
				type="button"
				onClick={() => onClick({id, value, title})}
			>
				{title}
			</DropdownOptionButton>
		</StyledDropdownOption>
	)
);

export default DropdownOption;
