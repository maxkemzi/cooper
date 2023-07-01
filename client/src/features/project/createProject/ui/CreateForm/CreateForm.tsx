import {
	CategoryItem,
	fetchCategoriesThunk,
	selectCategories
} from "@entities/category";
import {Form, FormButton, FormTextField} from "@shared/form";
import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {List} from "@shared/ui";
import {Formik} from "formik";
import {useEffect} from "react";
import createFormValidationSchema from "../../lib/createFormValidationSchema";
import createProjectThunk from "../../model/thunks/createProjectThunk";
import CreateFormDropdown from "../CreateFormDropdown/CreateFormDropdown";
import CreateFormRadioGroup from "../CreateFormRadioGroup/CreateFormRadioGroup";
import {CreateFormValues} from "../types";
import {
	BudgetContentStyled,
	DescriptionContentStyled,
	GridContainerStyled,
	OptionsContentStyled,
	TitleContentStyled
} from "./CreateForm.styled";

const CreateForm = () => {
	const dispatch = useTypedDispatch();
	const categories = useTypedSelector(selectCategories);

	const initialValues: CreateFormValues = {
		title: "",
		budget: "",
		description: "",
		workType: "onsite",
		visibility: "public",
		categoryIds: []
	};

	useEffect(() => {
		dispatch(fetchCategoriesThunk());
	}, [dispatch]);

	const handleSubmit = async (values: CreateFormValues) => {
		await dispatch(
			createProjectThunk({...values, budget: Number(values.budget)})
		);
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
							<List mb="md">
								{selectedCategories.map(category => (
									<CategoryItem key={category.id} category={category} />
								))}
							</List>
						) : null}
						<GridContainerStyled>
							<TitleContentStyled>
								<FormTextField
									name="title"
									InputProps={{
										placeholder: "Title",
										autoFocus: true
									}}
								/>
							</TitleContentStyled>
							<BudgetContentStyled>
								<FormTextField
									name="budget"
									InputProps={{
										min: 0,
										step: 5,
										max: 1_000_000,
										type: "number",
										placeholder: "Budget in $"
									}}
								/>
							</BudgetContentStyled>
							<DescriptionContentStyled>
								<FormTextField
									name="description"
									isMultiline
									TextareaProps={{
										rows: 8,
										placeholder: "Description"
									}}
								/>
							</DescriptionContentStyled>
							<OptionsContentStyled>
								<CreateFormDropdown />
								<CreateFormRadioGroup />
							</OptionsContentStyled>
						</GridContainerStyled>
						<FormButton>Create</FormButton>
					</Form>
				);
			}}
		</Formik>
	);
};

export default CreateForm;
