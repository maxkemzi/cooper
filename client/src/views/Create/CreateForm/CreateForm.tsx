import {CategoryItem, CategoryList} from "@components/CategoryList";
import {Dropdown, DropdownOption} from "@components/Dropdown";
import {FormButton, FormTextareaField} from "@components/Form";
import {Category} from "@customTypes/entities";
import {CreateFormValues} from "@customTypes/forms";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import CategoriesService from "@services/categories/categories.service";
import ProjectsService from "@services/projects/projects.service";
import {PROJECTS_ROUTE} from "@utils/constants/routeNames";
import {createFormValidation} from "@validation/index";
import {Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {CreateFormGrid, CreateFormTitleInput} from "./CreateForm.styled";
import CreateFormRadios from "./CreateFormRadios/CreateFormRadios";

const CreateForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const categories = useTypedSelector(
		state => state.categoriesState.categories
	);
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();

	const initialValues: CreateFormValues = {
		title: "",
		description: "",
		workType: "default",
		categories: [],
		visibility: "public"
	};

	useEffect(() => {
		dispatch(CategoriesService.fetchAll());
	}, [dispatch]);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={createFormValidation}
			validateOnBlur
			onSubmit={async values => {
				await dispatch(
					ProjectsService.create({
						...values,
						categories: values.categories.map(category => category._id)
					})
				);
				navigate(PROJECTS_ROUTE);
			}}
		>
			{({values, setFieldValue}) => (
				<Form>
					<CategoryList marginBottom="24px">
						{values.categories.map((category: Category) => (
							<CategoryItem key={category._id}>{category.name}</CategoryItem>
						))}
					</CategoryList>
					<CreateFormGrid>
						<CreateFormTitleInput
							name="title"
							rows={1}
							placeholder="Title"
							autoFocus
						/>
						<Dropdown
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
									onClick={() => {
										setFieldValue("categories", [
											...values.categories,
											category
										]);
									}}
									isActive={values.categories.some(
										(item: Category) => item._id === category._id
									)}
								/>
							))}
						</Dropdown>
						<FormTextareaField
							name="description"
							rows={6}
							placeholder="Description"
						/>
						<CreateFormRadios />
					</CreateFormGrid>
					<FormButton>Create</FormButton>
				</Form>
			)}
		</Formik>
	);
};

export default CreateForm;