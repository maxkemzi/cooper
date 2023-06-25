import {
	selectProjectsSort,
	setProjectsPage,
	setProjectsSort
} from "@entities/project";
import {useListenClickOutside} from "@shared/lib";
import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {Dropdown, DropdownOption, DropdownOptionData} from "@shared/ui";
import {useRef, useState} from "react";
import dropdownOptions from "../../lib/dropdownOptions";

const ProjectsSortDropdown = () => {
	const dispatch = useTypedDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const sort = useTypedSelector(selectProjectsSort);

	const handleClick = (option: DropdownOptionData) => {
		dispatch(setProjectsSort(option));
		dispatch(setProjectsPage(1));
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
			title="Sort by :"
			value={sort.title}
		>
			{dropdownOptions.map(({id, title, value}) => (
				<DropdownOption
					key={id}
					id={id}
					disabled={sort.id === id}
					isActive={sort.id === id}
					onClick={handleClick}
					title={title}
					value={value}
				/>
			))}
		</Dropdown>
	);
};

export default ProjectsSortDropdown;
