import {selectCategories} from "@entities/category";
import {useListenClickOutside} from "@shared/lib";
import {useTypedSelector} from "@shared/model";
import {Dropdown, DropdownOption, Field} from "@shared/ui";
import {useField} from "formik";
import {useId, useRef, useState} from "react";
import {CreateFormValues} from "../types";

const CreateFormDropdown = () => {
	const fieldId = useId();

	// // Categories hooks
	const categories = useTypedSelector(selectCategories);
	const [categoryIds, meta, {setValue: setCategoryIds}] =
		useField<CreateFormValues["categoryIds"]>("categoryIds");

	// // Dropdown hooks
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	// // Categories logic
	const isCategoryIdInSelection = (id: string) =>
		categoryIds.value.some(categoryId => categoryId === id);

	const addCategoryId = (id: string) => {
		setCategoryIds([...categoryIds.value, id]);
	};
	const removeCategoryId = (id: string) => {
		setCategoryIds(categoryIds.value.filter(categoryId => categoryId !== id));
	};

	const toggleCategoryId = (id: string) => {
		const categoryIdInSelection = isCategoryIdInSelection(id);

		if (categoryIdInSelection) {
			removeCategoryId(id);
		} else {
			addCategoryId(id);
		}
	};

	// // Dropdown logic
	const handleDropdownClose = () => setDropdownIsOpen(false);
	const handleDropdownToggle = () => setDropdownIsOpen(prev => !prev);

	useListenClickOutside(dropdownRef, handleDropdownClose);

	return (
		<Field inputId={fieldId} error={meta.error} isInvalid={!!meta.error}>
			<Dropdown
				ref={dropdownRef}
				value="Category"
				isOpen={dropdownIsOpen}
				onToggle={handleDropdownToggle}
			>
				{categories.map(category => (
					<DropdownOption
						key={category.id}
						onClick={() => toggleCategoryId(category.id)}
						isActive={isCategoryIdInSelection(category.id)}
					>
						{category.name}
					</DropdownOption>
				))}
			</Dropdown>
		</Field>
	);
};

export default CreateFormDropdown;
