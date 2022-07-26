import {CategoryItem, CategoryList} from "@components/CategoryList";
import {FormButton, FormTextareaField, FormTextField} from "@components/Form";
import {Category} from "@customTypes/entities";
import {CreateFormValues} from "@customTypes/forms";
import useTypedDispatch from "@hooks/useTypedDispatch";
import CategoriesService from "@services/categories/categories.service";
import ProjectsService from "@services/projects/projects.service";
import {PROJECTS_ROUTE} from "@utils/constants/routeNames";
import {createFormValidation} from "@validation/index";
import {Form, Formik} from "formik";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {CreateFormGrid, CreateFormTitleInput} from "./CreateForm.styled";
import CreateFormDropdown from "./CreateFormDropdown/CreateFormDropdown";
import CreateFormRadios from "./CreateFormRadios/CreateFormRadios";

const CreateForm = () => {
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();

	const initialValues: CreateFormValues = {
		title: "",
		budget: 0,
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
			{({values}) => (
				<Form noValidate>
					{values.categories.length !== 0 && (
						<CategoryList marginBottom="16px">
							{values.categories.map((category: Category) => (
								<CategoryItem key={category._id}>{category.name}</CategoryItem>
							))}
						</CategoryList>
					)}
					<CreateFormGrid>
						<CreateFormTitleInput name="title" placeholder="Title" autoFocus />
						<CreateFormDropdown />
						<FormTextareaField
							name="description"
							rows={8}
							placeholder="Description"
						/>
						<div>
							<FormTextField
								marginBottom="20px"
								min={0}
								step={5}
								max={1_000_000}
								name="budget"
								placeholder="Budget"
								type="number"
							/>
							<CreateFormRadios />
						</div>
					</CreateFormGrid>
					<FormButton>Create</FormButton>
				</Form>
			)}
		</Formik>
	);
};

export default CreateForm;
