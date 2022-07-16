import React, {FC} from "react";
import {IDropdownOption} from "@customTypes/index";
import {
	StyledDropdownOption,
	DropdownOptionButton
} from "./DropdownOption.styled";

interface DropdownOptionProps extends IDropdownOption {
	isActive?: boolean;
	onClick: (option: IDropdownOption) => void;
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
