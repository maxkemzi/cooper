import {ProjectToApi} from "@entities/project";
import {Form, FormButton, FormTextField} from "@shared/form";
import {useTypedDispatch} from "@shared/model";
import {Formik} from "formik";
import {FC} from "react";
import editFormValidationSchema from "../../lib/editFormValidationSchema";
import EditFormRadioGroups from "../EditFormRadioGroups/EditFormRadioGroups";
import {FormFieldsStyled} from "./EditForm.styled";
import updateProjectThunk from "../../model/thunks/updateProjectThunk";

interface FormValues extends Required<ProjectToApi> {}

interface Props {
	projectId: string;
}

const EditForm: FC<Props> = ({projectId}) => {
	const dispatch = useTypedDispatch();

	const initialValues: FormValues = {
		budget: 0,
		description: "",
		title: "",
		visibility: "public",
		workType: "onsite",
		categoryIds: []
	};

	const handleSubmit = (values: FormValues) => {
		dispatch(updateProjectThunk(projectId, values));
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={editFormValidationSchema}
			validateOnBlur
			enableReinitialize
			onSubmit={handleSubmit}
		>
			{({dirty}) => (
				<Form>
					<FormFieldsStyled>
						<FormTextField name="title" InputProps={{placeholder: "Title"}} />
						<FormTextField
							name="description"
							isMultiline
							TextareaProps={{placeholder: "Description"}}
						/>
						<FormTextField
							name="budget"
							InputProps={{
								min: 0,
								step: 5,
								max: 1_000_000,
								type: "number",
								placeholder: "Budget"
							}}
						/>
					</FormFieldsStyled>
					<EditFormRadioGroups />
					<FormButton mt="md" isDisabled={!dirty}>
						Save
					</FormButton>
				</Form>
			)}
		</Formik>
	);
};

export default EditForm;
