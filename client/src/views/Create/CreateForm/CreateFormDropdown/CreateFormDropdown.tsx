import {DropdownOption} from "@components/Dropdown";
import {Category} from "@customTypes/entities";
import useTypedSelector from "@hooks/useTypedSelector";
import {getCategories} from "@store/categories/categories.selectors";
import {useField} from "formik";
import React, {useState} from "react";
import StyledCreateFormDropdown from "./CreateFormDropdown.styled";

const CreateFormDropdown = () => {
	const categories = useTypedSelector(getCategories);
	const [categoriesField, , {setValue}] = useField<Category[]>("categories");
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (category: Category) => {
		const categoryIsSelected: boolean = categoriesField.value.some(
			c => c._id === category._id
		);

		if (categoryIsSelected) {
			// Remove category from selection
			setValue(categoriesField.value.filter(item => item._id !== category._id));
		} else {
			// Add category to selection
			setValue([...categoriesField.value, category]);
		}
	};

	const isCategoryInSelection = (id: number | string) =>
		categoriesField.value.some((item: Category) => item._id === id);

	return (
		<StyledCreateFormDropdown
			isPlaceholder
			title="Category"
			isOpen={isOpen}
			setIsOpen={setIsOpen}
		>
			{categories.map(category => (
				<DropdownOption
					key={category._id}
					title={category.name}
					value={category._id}
					onClick={() => handleClick(category)}
					isActive={isCategoryInSelection(category._id)}
				/>
			))}
		</StyledCreateFormDropdown>
	);
};

export default CreateFormDropdown;
