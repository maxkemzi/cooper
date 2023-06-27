import {Project, ProjectToApi} from "@entities/project";
import {Form, FormButton, FormTextField} from "@shared/form";
import {useTypedDispatch} from "@shared/model";
import {Formik} from "formik";
import {FC} from "react";
import editFormValidationSchema from "../../lib/editFormValidationSchema";
import editProjectThunk from "../../model/thunks/editProjectThunk";
import EditProjectFormRadioGroups from "../EditProjectFormRadioGroups/EditFormRadioGroups";
import {FormFieldsStyled} from "./EditProjectForm.styled";

interface FormValues extends Partial<ProjectToApi> {}

interface Props {
	project: Project;
	onSubmit?: () => void;
}

const EditProjectForm: FC<Props> = ({project, onSubmit}) => {
	const dispatch = useTypedDispatch();
	const {id, budget, description, title, visibility, workType} = project;

	const initialValues: FormValues = {
		budget,
		description,
		title,
		visibility,
		workType
	};

	const handleSubmit = (values: FormValues) => {
		dispatch(editProjectThunk(id, values));
		onSubmit?.();
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
					<EditProjectFormRadioGroups />
					<FormButton mt="md" isDisabled={!dirty}>
						Save
					</FormButton>
				</Form>
			)}
		</Formik>
	);
};

export default EditProjectForm;
