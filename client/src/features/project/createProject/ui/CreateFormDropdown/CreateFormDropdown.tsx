import {selectCategories} from "@entities/category";
import {useListenClickOutside} from "@shared/lib";
import {useTypedSelector} from "@shared/model";
import {DropdownOption} from "@shared/ui";
import {useField} from "formik";
import {useRef, useState} from "react";
import {CreateFormValues} from "../types";
import {StyledCreateFormDropdown} from "./CreateFormDropdown.styled";

const CreateFormDropdown = () => {
	const categories = useTypedSelector(selectCategories);
	const [categoryIds, , {setValue}] =
		useField<CreateFormValues["categoryIds"]>("categoryIds");
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const handleDropdownClose = () => setIsOpen(false);

	const handleDropdownToggle = () => setIsOpen(prev => !prev);

	const isCategoryInSelection = (categoryId: string) =>
		categoryIds.value.some(id => id === categoryId);

	const handleClick = (categoryId: string) => () => {
		if (isCategoryInSelection(categoryId)) {
			// Remove category from selection
			setValue(categoryIds.value.filter(id => id !== categoryId));
		} else {
			// Add category to selection
			setValue([...categoryIds.value, categoryId]);
		}
	};

	useListenClickOutside(dropdownRef, handleDropdownClose);

	return (
		<StyledCreateFormDropdown
			ref={dropdownRef}
			isPlaceholder
			title="Category"
			isOpen={isOpen}
			onToggle={handleDropdownToggle}
		>
			{categories.map(category => (
				<DropdownOption
					key={category.id}
					id={category.id}
					title={category.name}
					value={category.id}
					onClick={handleClick(category.id)}
					isActive={isCategoryInSelection(category.id)}
				/>
			))}
		</StyledCreateFormDropdown>
	);
};

export default CreateFormDropdown;
