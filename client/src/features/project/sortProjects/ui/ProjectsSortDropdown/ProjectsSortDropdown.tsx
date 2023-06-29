import {
	ProjectsSortOption,
	selectProjectsSort,
	setProjectsSort
} from "@entities/project";
import {useListenClickOutside} from "@shared/lib";
import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {Dropdown, DropdownOption} from "@shared/ui";
import {useRef, useState} from "react";
import sortOptions from "../../lib/sortOptions";

const ProjectsSortDropdown = () => {
	const dispatch = useTypedDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const sort = useTypedSelector(selectProjectsSort);

	const handleClick = (option: ProjectsSortOption) => {
		dispatch(setProjectsSort(option));
		setIsOpen(false);
	};

	const handleToggleOpen = () => setIsOpen(prev => !prev);

	const handleClose = () => setIsOpen(false);

	useListenClickOutside(dropdownRef, handleClose);

	return (
		<Dropdown
			ref={dropdownRef}
			isOpen={isOpen}
			onToggle={handleToggleOpen}
			title="Sort by"
			value={sort.title}
		>
			{sortOptions.map(option => (
				<DropdownOption
					key={option.id}
					disabled={sort.id === option.id}
					isActive={sort.id === option.id}
					onClick={() => handleClick(option)}
				>
					{option.title}
				</DropdownOption>
			))}
		</Dropdown>
	);
};

export default ProjectsSortDropdown;
