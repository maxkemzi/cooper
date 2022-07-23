import {
	FormFields,
	FormTextField,
	FormButton,
	FormLink,
	Form
} from "@components/Form";
import Highlight from "@components/Highlight/Highlight";
import Title from "@components/Title/Title";
import useTypedDispatch from "@hooks/useTypedDispatch";
import AuthService from "@services/auth/auth.service";
import {HOME_ROUTE, LOGIN_ROUTE} from "@utils/constants/routeNames";
import {signupFormValidation} from "@validation/index";
import {Formik} from "formik";
import React, {FC} from "react";
import {useNavigate} from "react-router-dom";

const AuthSignupForm: FC = () => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();

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
				onSubmit={async values => {
					await Promise.all([
						dispatch(AuthService.register(values)),
						navigate(HOME_ROUTE)
					]);
				}}
				validateOnBlur
			>
				<Form marginBottom="12px">
					<FormFields marginBottom="24px" gap="20px">
						<FormTextField name="username" type="text" placeholder="Username" />
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
			</Formik>
			<FormLink to={LOGIN_ROUTE}>I already have an account</FormLink>
		</>
	);
};

export default AuthSignupForm;
