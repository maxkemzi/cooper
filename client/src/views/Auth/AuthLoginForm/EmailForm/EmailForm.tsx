import {
	Form,
	FormButton,
	FormFields,
	FormLink,
	FormTextField
} from "@components/Form";
import FormStatus from "@components/Form/FormStatus/FormStatus";
import useTypedDispatch from "@hooks/useTypedDispatch";
import AuthService from "@services/auth/auth.service";
import {PROJECTS_ROUTE, SIGNUP_ROUTE} from "@utils/constants/routeNames";
import {emailLoginFormValidation} from "@validation/index";
import {Formik} from "formik";
import React, {Dispatch, FC, MouseEvent, SetStateAction} from "react";
import {useNavigate} from "react-router-dom";

interface EmailFormProps {
	setWithUsername: Dispatch<SetStateAction<boolean>>;
}

const EmailForm: FC<EmailFormProps> = ({setWithUsername}) => {
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();

	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		setWithUsername(true);
	};

	const redirect = () => navigate(PROJECTS_ROUTE);

	return (
		<>
			<Formik
				initialValues={{email: "", password: ""}}
				validationSchema={emailLoginFormValidation}
				onSubmit={async (values, {setStatus}) => {
					await dispatch(
						AuthService.loginWithEmail(values, setStatus, redirect)
					);
				}}
				validateOnBlur
			>
				{({status}) => (
					<Form marginBottom="12px">
						{status && <FormStatus marginBottom="20px">{status}</FormStatus>}
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
				)}
			</Formik>
			<FormLink as="button" marginBottom="4px" onClick={handleClick}>
				Log in with username
			</FormLink>

			<FormLink to={SIGNUP_ROUTE}>Create an account</FormLink>
		</>
	);
};

export default EmailForm;
