import React, {useState} from "react";
import {projectsActs} from "@store/projects/projects.slice";
import {IDropdownOption} from "@customTypes/index";
import useTypedSelector from "@hooks/useTypedSelector";
import useTypedDispatch from "@hooks/useTypedDispatch";
import {Dropdown, DropdownOption} from "@components/Dropdown";

const ProjectsDropdown = () => {
	const dispatch = useTypedDispatch();
	const [isOpen, setIsOpen] = useState(false);

	const selection = useTypedSelector(
		state => state.projectsState.dropdownSelection
	);

	const handleClick = (option: IDropdownOption) => {
		dispatch(projectsActs.setDropdownSelection(option));
		setIsOpen(false);
	};

	return (
		<Dropdown
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			title="Sort by :"
			selection={selection}
		>
			<DropdownOption
				id={1}
				onClick={handleClick}
				title="Date"
				value="createdDate"
			/>
			<DropdownOption
				id={2}
				onClick={handleClick}
				title="Budget"
				value="budget"
			/>
		</Dropdown>
	);
};

export default ProjectsDropdown;
