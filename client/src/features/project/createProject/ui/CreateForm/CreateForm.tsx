import {
	CategoryItem,
	fetchCategoriesThunk,
	selectCategories
} from "@entities/category";
import {Form, FormButton, FormTextField} from "@shared/form";
import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {List, Typography} from "@shared/ui";
import {Formik} from "formik";
import {useEffect} from "react";
import createFormValidationSchema from "../../lib/createFormValidationSchema";
import createProjectThunk from "../../model/thunks/createProjectThunk";
import CreateFormDropdown from "../CreateFormDropdown/CreateFormDropdown";
import CreateFormRadioGroup from "../CreateFormRadioGroup/CreateFormRadioGroup";
import {CreateFormValues} from "../types";
import {GridContainerStyled, TitleFieldStyled} from "./CreateForm.styled";

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
							<List mb="md">
								{selectedCategories.map(category => (
									<CategoryItem key={category.id} category={category} />
								))}
							</List>
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
								<FormTextField
									name="budget"
									mb="md"
									InputProps={{
										InputProps: {
											defaultValue: 0,
											min: 0,
											step: 5,
											max: 1_000_000,
											placeholder: "Budget",
											type: "number"
										},
										startSlot: <Typography>$</Typography>
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
