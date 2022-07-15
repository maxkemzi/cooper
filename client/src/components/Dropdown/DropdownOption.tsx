import React, {FC} from "react";
import {IDropdownOption} from "@customTypes/index";
import {StyledDropdownOption, Button} from "./DropdownOption.styled";

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
		<Button type="button" onClick={() => onClick({id, value, title})}>
			{title}
		</Button>
	</StyledDropdownOption>
);

export default DropdownOption;
