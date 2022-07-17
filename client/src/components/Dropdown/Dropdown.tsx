import useListenClickOutside from "@hooks/useListenClickOutside";
import React, {Dispatch, FC, ReactNode, SetStateAction, useRef} from "react";
import {Button, List, Title, StyledDropdown} from "./Dropdown.styled";

interface DropdownProps {
	title: string;
	isPlaceholder?: boolean;
	value?: string;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	children: ReactNode;
}

const Dropdown: FC<DropdownProps> = ({
	title,
	isPlaceholder,
	isOpen,
	setIsOpen,
	value,
	children
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const toggleIsOpen = () => setIsOpen(!isOpen);

	useListenClickOutside(ref, () => setIsOpen(false));

	return (
		<StyledDropdown ref={ref}>
			<Button onClick={toggleIsOpen} type="button">
				{isPlaceholder ? (
					<p>{value || title}</p>
				) : (
					<Title>
						{title} {value}
					</Title>
				)}
			</Button>
			{isOpen && <List>{children}</List>}
		</StyledDropdown>
	);
};

export default Dropdown;
