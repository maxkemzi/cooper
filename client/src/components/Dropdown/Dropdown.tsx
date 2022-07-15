import React, {Dispatch, FC, ReactNode, SetStateAction} from "react";
import {IDropdownOption} from "@customTypes/index";
import {Button, List, Title, StyledDropdown} from "./Dropdown.styled";

interface DropdownProps {
	title: string;
	isPlaceholder?: boolean;
	selection: IDropdownOption;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	children: ReactNode;
}

const Dropdown: FC<DropdownProps> = ({
	title,
	isPlaceholder,
	isOpen,
	setIsOpen,
	selection,
	children
}) => {
	const toggleIsOpen = () => setIsOpen(!isOpen);

	return (
		<StyledDropdown>
			<Button onClick={toggleIsOpen} type="button">
				{isPlaceholder ? (
					<p>{selection.title || title}</p>
				) : (
					<Title>
						{title} {selection.title}
					</Title>
				)}
			</Button>
			{isOpen && <List>{children}</List>}
		</StyledDropdown>
	);
};

export default Dropdown;
