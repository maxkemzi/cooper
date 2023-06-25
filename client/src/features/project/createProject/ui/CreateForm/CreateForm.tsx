import {
	CategoryItem,
	fetchCategoriesThunk,
	selectCategories
} from "@entities/category";
import {Form, FormButton, FormTextField} from "@shared/form";
import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {Formik} from "formik";
import {useEffect} from "react";
import createFormValidationSchema from "../../lib/createFormValidationSchema";
import CreateFormDropdown from "../CreateFormDropdown/CreateFormDropdown";
import CreateFormRadioGroup from "../CreateFormRadioGroup/CreateFormRadioGroup";
import {CreateFormValues} from "../types";
import {
	BudgetFieldStyled,
	CategoryListStyled,
	GridContainerStyled,
	TitleFieldStyled
} from "./CreateForm.styled";
import createProjectThunk from "../../model/thunks/createProjectThunk";

const CreateForm = () => {
	const dispatch = useTypedDispatch();
	const categories = useTypedSelector(selectCategories);

	const initialValues: CreateFormValues = {
		title: "",
		budget: 0,
		description: "",
		workType: "onsite",
		visibility: "public",
		categoryIds: []
	};

	useEffect(() => {
		dispatch(fetchCategoriesThunk());
	}, [dispatch]);

	const handleSubmit = async (values: CreateFormValues) => {
		await dispatch(createProjectThunk(values));
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={createFormValidationSchema}
			validateOnBlur
			onSubmit={handleSubmit}
		>
			{({values}) => {
				const selectedCategories = categories.filter(category =>
					values.categoryIds.includes(category.id)
				);
				return (
					<Form>
						{selectedCategories.length !== 0 ? (
							<CategoryListStyled>
								{selectedCategories.map(category => (
									<li key={category.id}>
										<CategoryItem category={category} />
									</li>
								))}
							</CategoryListStyled>
						) : null}
						<GridContainerStyled>
							<TitleFieldStyled
								name="title"
								InputProps={{
									placeholder: "Title",
									autoFocus: true
								}}
							/>
							<CreateFormDropdown />
							<FormTextField
								name="description"
								isMultiline
								TextareaProps={{
									rows: 8,
									placeholder: "Description"
								}}
							/>
							<div>
								<BudgetFieldStyled
									name="budget"
									InputProps={{
										min: 0,
										step: 5,
										max: 1_000_000,
										placeholder: "Budget",
										type: "number"
									}}
								/>
								<CreateFormRadioGroup />
							</div>
						</GridContainerStyled>
						<FormButton>Create</FormButton>
					</Form>
				);
			}}
		</Formik>
	);
};

export default CreateForm;
