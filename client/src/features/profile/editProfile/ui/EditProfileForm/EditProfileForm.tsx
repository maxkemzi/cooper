import {selectUser} from "@entities/user";
import {Form, FormTextField} from "@shared/form";
import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {Button} from "@shared/ui";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {useState} from "react";
import editProfileFormValidationSchema from "../../lib/editProfileFormValidationSchema";
import deleteAvatarThunk from "../../model/thunks/deleteAvatarThunk";
import editProfileThunk from "../../model/thunks/editProfileThunk";
import uploadAvatarThunk from "../../model/thunks/uploadAvatarThunk";
import EditProfileFormAvatar from "../EditProfileFormAvatar/EditProfileFormAvatar";
import {EditProfileFormValues} from "../types";
import {EditProfileFormFields} from "./EditProfileForm.styled";

const EditProfileForm = () => {
	const dispatch = useTypedDispatch();
	const user = useTypedSelector(selectUser);

	const [avatarAction, setAvatarAction] = useState<
		(() => Promise<void>) | null
	>(null);

	const handleAvatarUpload = (file: File) => {
		setAvatarAction(() => () => dispatch(uploadAvatarThunk(file)));
	};

	const handleAvatarDelete = () => {
		setAvatarAction(() => () => dispatch(deleteAvatarThunk()));
	};

	const handleAvatarReset = () => {
		setAvatarAction(null);
	};

	const handleClick = async ({
		submitForm,
		dirty
	}: Pick<FormikProps<EditProfileFormValues>, "dirty" | "submitForm">) => {
		if (avatarAction) {
			await avatarAction();
			setAvatarAction(null);
		}

		if (dirty) {
			submitForm();
		}
	};

	const handleSubmit = async (
		values: EditProfileFormValues,
		{resetForm}: FormikHelpers<EditProfileFormValues>
	) => {
		dispatch(
			editProfileThunk({
				username: values.username,
				description: values.description,
				email: values.email,
				location: values.location
			})
		);

		resetForm({values});
	};

	if (user === null) {
		// todo: improve logic
		return <div>Something went wrong</div>;
	}

	const initialValues: EditProfileFormValues = {
		username: user.username,
		email: user.email,
		description: user.description,
		location: user.location
	};

	return (
		<>
			<EditProfileFormAvatar
				initialPath={user.avatar}
				onUpload={handleAvatarUpload}
				onDelete={handleAvatarDelete}
				onReset={handleAvatarReset}
			/>
			<Formik
				initialValues={initialValues}
				validationSchema={editProfileFormValidationSchema}
				onSubmit={handleSubmit}
				validateOnBlur
			>
				{({dirty, submitForm}) => (
					<Form>
						<EditProfileFormFields>
							<FormTextField
								name="description"
								isMultiline
								TextareaProps={{placeholder: "Description"}}
							/>
							<FormTextField
								name="username"
								InputProps={{placeholder: "Username"}}
							/>
							<FormTextField name="email" InputProps={{placeholder: "Email"}} />
							<FormTextField
								name="location"
								InputProps={{placeholder: "Location"}}
							/>
						</EditProfileFormFields>
						<Button
							onClick={() => handleClick({submitForm, dirty})}
							disabled={!dirty && avatarAction === null}
						>
							Save
						</Button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default EditProfileForm;
