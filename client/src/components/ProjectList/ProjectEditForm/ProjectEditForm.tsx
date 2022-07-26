import {
	FormButton,
	FormFields,
	FormTextareaField,
	FormTextField
} from "@components/Form";
import {EditProjectFormValues} from "@customTypes/forms";
import useTypedDispatch from "@hooks/useTypedDispatch";
import ProjectsService from "@services/projects/projects.service";
import {editProjectFormValidation} from "@validation/index";
import {Form, Formik} from "formik";
import React, {Dispatch, FC, SetStateAction} from "react";
import ProjectEditFormRadios from "./ProjectEditFormRadios/ProjectEditFormRadios";

interface ProjectEditFormProps {
	data: EditProjectFormValues;
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ProjectEditForm: FC<ProjectEditFormProps> = ({
	data: {id, ...initialValues},
	setIsModalOpen
}) => {
	const dispatch = useTypedDispatch();

	const handleSubmit = (values: EditProjectFormValues) => {
		dispatch(ProjectsService.updateOne(id, values));
		setIsModalOpen(false);
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={editProjectFormValidation}
			validateOnBlur
			enableReinitialize
			onSubmit={handleSubmit}
		>
			{({dirty}) => (
				<Form>
					<FormFields maxWidth="400px" marginBottom="16px" gap="16px">
						<FormTextField name="title" placeholder="Title" />
						<FormTextareaField name="description" placeholder="Description" />
						<FormTextField
							min={0}
							step={5}
							max={1_000_000}
							name="budget"
							placeholder="Budget"
							type="number"
						/>
					</FormFields>
					<ProjectEditFormRadios />
					<FormButton disableCondition={!dirty} marginTop="16px">
						Save
					</FormButton>
				</Form>
			)}
		</Formik>
	);
};

export default ProjectEditForm;
