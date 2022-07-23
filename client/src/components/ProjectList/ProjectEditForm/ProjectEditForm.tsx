import {
	FormButton,
	FormFields,
	FormTextareaField,
	FormTextField
} from "@components/Form";
import {EditProjectFormValues} from "@customTypes/forms";
import useToast from "@hooks/useToast";
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
	const {showToast} = useToast();
	const dispatch = useTypedDispatch();

	const handleSuccess: () => void = () =>
		showToast("success", "Project edited.");

	const handleError: () => void = () =>
		showToast("danger", "Something went wrong.");

	const handleSubmit = (values: EditProjectFormValues) => {
		dispatch(
			ProjectsService.updateOne(id, values, {handleSuccess, handleError})
		);
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
