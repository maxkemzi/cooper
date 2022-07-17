import React, {useState} from "react";
import {projectsActs} from "@store/projects/projects.slice";
import useTypedSelector from "@hooks/useTypedSelector";
import useTypedDispatch from "@hooks/useTypedDispatch";
import {Dropdown, DropdownOption} from "@components/Dropdown";
import {DropdownOption as DropdownOptionInterface} from "@customTypes/store";
import {projectsDropdownItems} from "../../../data";

const ProjectsDropdown = () => {
	const dispatch = useTypedDispatch();
	const [isOpen, setIsOpen] = useState(false);

	const sort = useTypedSelector(state => state.projectsState.sort);

	const handleClick = (option: DropdownOptionInterface) => {
		dispatch(projectsActs.setSort(option));
		setIsOpen(false);
	};

	return (
		<Dropdown
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			title="Sort by :"
			value={sort.title}
		>
			{projectsDropdownItems.map(({id, title, value}) => (
				<DropdownOption
					key={id}
					id={id}
					isActive={sort.id === id}
					onClick={handleClick}
					title={title}
					value={value}
				/>
			))}
		</Dropdown>
	);
};

export default ProjectsDropdown;
