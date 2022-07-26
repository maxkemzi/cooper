import {Dropdown, DropdownOption} from "@components/Dropdown";
import {DropdownOption as DropdownOptionInterface} from "@customTypes/store";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import {
	getProjectsSortId,
	getProjectsSortTitle
} from "@store/projects/projects.selectors";
import {projectsActs} from "@store/projects/projects.slice";
import React, {useMemo, useState} from "react";
import {projectsDropdownItems} from "../../../data";

const ProjectsDropdown = () => {
	const dispatch = useTypedDispatch();
	const dropdownItems = useMemo(() => projectsDropdownItems, []);
	const [isOpen, setIsOpen] = useState(false);

	const sortTitle = useTypedSelector(getProjectsSortTitle);
	const sortId = useTypedSelector(getProjectsSortId);

	const handleClick = (option: DropdownOptionInterface) => {
		dispatch(projectsActs.setSort(option));
		dispatch(projectsActs.setPage(1));
		setIsOpen(false);
	};

	return (
		<Dropdown
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			title="Sort by :"
			value={sortTitle}
		>
			{dropdownItems.map(({id, title, value}) => (
				<DropdownOption
					key={id}
					id={id}
					disabled={sortId === id}
					isActive={sortId === id}
					onClick={handleClick}
					title={title}
					value={value}
				/>
			))}
		</Dropdown>
	);
};

export default ProjectsDropdown;
