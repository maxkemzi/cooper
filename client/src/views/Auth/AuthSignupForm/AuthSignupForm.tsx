import {
	Form,
	FormButton,
	FormFields,
	FormLink,
	FormTextField
} from "@components/Form";
import FormStatus from "@components/Form/FormStatus/FormStatus";
import Highlight from "@components/Highlight/Highlight";
import Title from "@components/Title/Title";
import useTypedDispatch from "@hooks/useTypedDispatch";
import AuthService from "@services/auth/auth.service";
import {LOGIN_ROUTE, PROJECTS_ROUTE} from "@utils/constants/routeNames";
import {signupFormValidation} from "@validation/index";
import {Formik} from "formik";
import React, {FC} from "react";
import {useNavigate} from "react-router-dom";

const AuthSignupForm: FC = () => {
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();

	const redirect = () => navigate(PROJECTS_ROUTE);

	return (
		<>
			<Title marginBottom="24px" size="large">
				Sign <Highlight>up</Highlight>
			</Title>
			<Formik
				initialValues={{
					username: "",
					email: "",
					password: "",
					passwordConf: ""
				}}
				validationSchema={signupFormValidation}
				onSubmit={async (values, {setStatus}) => {
					await dispatch(AuthService.register(values, setStatus, redirect));
				}}
				validateOnBlur
			>
				{({status}) => (
					<Form marginBottom="12px">
						{status && <FormStatus marginBottom="20px">{status}</FormStatus>}

						<FormFields marginBottom="24px" gap="20px">
							<FormTextField
								name="username"
								type="text"
								placeholder="Username"
							/>
							<FormTextField name="email" type="email" placeholder="Email" />
							<FormTextField
								name="password"
								type="password"
								placeholder="Password"
							/>
							<FormTextField
								name="passwordConf"
								type="password"
								placeholder="Confirm Password"
							/>
						</FormFields>

						<FormButton>Sign up</FormButton>
					</Form>
				)}
			</Formik>
			<FormLink to={LOGIN_ROUTE}>I already have an account</FormLink>
		</>
	);
};

export default AuthSignupForm;
