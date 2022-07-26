import {
	FormButton,
	FormFields,
	FormTextareaField,
	FormTextField
} from "@components/Form";
import {EditProfileFormValues, FormPromiseAction} from "@customTypes/forms";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import useWindowSize from "@hooks/useWindowSize";
import UsersService from "@services/users/users.service";
import {
	getAuthUserAvatar,
	getAuthUserDesc,
	getAuthUserEmail,
	getAuthUserLocation,
	getAuthUserUsername
} from "@store/auth/auth.selectors";
import ScreenSizes from "@utils/constants/screenSizes";
import {editProfileFormValidation} from "@validation/index";
import {Form, Formik} from "formik";
import React, {useState} from "react";
import EditProfileFormAvatar from "./EditProfileFormAvatar/EditProfileFormAvatar";

const EditProfileForm = () => {
	const dispatch = useTypedDispatch();
	const {width} = useWindowSize();

	// Selectors
	const avatar = useTypedSelector(getAuthUserAvatar);
	const username = useTypedSelector(getAuthUserUsername);
	const email = useTypedSelector(getAuthUserEmail);
	const description = useTypedSelector(getAuthUserDesc);
	const location = useTypedSelector(getAuthUserLocation);

	// Form initial values
	const initialValues: EditProfileFormValues = {
		avatar,
		username,
		email,
		description,
		location
	};

	// Update action
	const update = async (values: EditProfileFormValues) =>
		dispatch(
			UsersService.updateOne({
				username: values.username,
				description: values.description,
				email: values.email,
				location: values.location
			})
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
					<FormFields
						maxWidth="400px"
						marginBottom={width <= ScreenSizes.TabletWidth ? "16px" : "24px"}
						gap={width <= ScreenSizes.TabletWidth ? "12px" : "24px"}
					>
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
