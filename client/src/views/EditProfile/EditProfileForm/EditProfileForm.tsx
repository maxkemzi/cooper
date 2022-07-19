import {
	FormButton,
	FormFields,
	FormTextareaField,
	FormTextField
} from "@components/Form";
import {EditProfileFormValues, FormPromiseAction} from "@customTypes/forms";
import useToast from "@hooks/useToast";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import UsersService from "@services/users/users.service";
import {editProfileFormValidation} from "@validation/index";
import {Form, Formik} from "formik";
import React, {useState} from "react";
import EditProfileFormAvatar from "./EditProfileFormAvatar/EditProfileFormAvatar";

const EditProfileForm = () => {
	const dispatch = useTypedDispatch();
	const {showToast} = useToast();
	const avatar = useTypedSelector(state => state.authState.user.avatar);
	const username = useTypedSelector(state => state.authState.user.username);
	const email = useTypedSelector(state => state.authState.user.email);
	const description = useTypedSelector(
		state => state.authState.user.description
	);
	const location = useTypedSelector(state => state.authState.user.location);

	// Form initial values
	const initialValues: EditProfileFormValues = {
		avatar,
		username,
		email,
		description,
		location
	};

	const handleSuccess: () => void = () =>
		showToast("success", "Profile settings saved.");

	const handleError: () => void = () =>
		showToast("danger", "Something went wrong.");

	// Update action
	const update = async (values: EditProfileFormValues) =>
		dispatch(
			UsersService.updateOne(
				{
					username: values.username,
					description: values.description,
					email: values.email,
					location: values.location
				},
				{handleError, handleSuccess}
			)
		);

	const [actions, setActions] = useState<
		FormPromiseAction<EditProfileFormValues>[]
	>([update]);

	const addAction = (action: FormPromiseAction<EditProfileFormValues>) =>
		setActions([...actions, action]);

	const resetActions = () => setActions([update]);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={editProfileFormValidation}
			validateOnBlur
			onSubmit={async (values, {resetForm}) => {
				await Promise.all(actions.map(action => action(values)));
				resetActions();
				resetForm({values});
			}}
		>
			{({dirty}) => (
				<Form>
					<EditProfileFormAvatar addAction={addAction} />
					<FormFields maxWidth="400px" marginBottom="24px" gap="20px">
						<FormTextareaField placeholder="Description" name="description" />
						<FormTextField name="username" placeholder="Username" />
						<FormTextField name="email" placeholder="Email" />
						<FormTextField name="location" placeholder="Location" />
					</FormFields>
					<FormButton disableCondition={!dirty}>Save</FormButton>
				</Form>
			)}
		</Formik>
	);
};

export default EditProfileForm;
