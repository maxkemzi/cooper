import {
	FormButton,
	FormLink,
	FormTextField,
	FormFields,
	Form
} from "@components/Form";
import useTypedDispatch from "@hooks/useTypedDispatch";
import AuthService from "@services/auth/auth.service";
import {HOME_ROUTE, SIGNUP_ROUTE} from "@utils/constants/routeNames";
import {emailLoginFormValidation} from "@validation/index";
import {Formik} from "formik";
import React, {Dispatch, FC, MouseEvent, SetStateAction} from "react";
import {useNavigate} from "react-router-dom";

interface EmailFormProps {
	setWithUsername: Dispatch<SetStateAction<boolean>>;
}

const EmailForm: FC<EmailFormProps> = ({setWithUsername}) => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();

	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		setWithUsername(true);
	};

	return (
		<>
			<Formik
				initialValues={{email: "", password: ""}}
				validationSchema={emailLoginFormValidation}
				onSubmit={async values => {
					await Promise.all([
						dispatch(AuthService.loginWithEmail(values)),
						navigate(HOME_ROUTE)
					]);
				}}
				validateOnBlur
			>
				<Form marginBottom="12px">
					<FormFields marginBottom="24px" gap="20px">
						<FormTextField name="email" type="text" placeholder="Email" />

						<FormTextField
							name="password"
							type="password"
							placeholder="Password"
						/>
					</FormFields>

					<FormButton>Log in</FormButton>
				</Form>
			</Formik>
			<FormLink as="button" marginBottom="4px" onClick={handleClick}>
				Log in with username
			</FormLink>

			<FormLink to={SIGNUP_ROUTE}>Create an account</FormLink>
		</>
	);
};

export default EmailForm;
