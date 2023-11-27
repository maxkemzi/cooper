import {RouteName} from "@shared/constants";
import {FormButton, FormTextField} from "@shared/form";
import {useTypedDispatch} from "@shared/model";
import {Link, Typography} from "@shared/ui";
import {Formik, FormikHelpers} from "formik";
import {FC} from "react";
import {SignupDataToApi} from "../../api/types";
import {signupFormValidationSchema} from "../../lib/validationSchemas";
import signUpThunk from "../../model/thunks/signUpThunk";
import {AuthForm, AuthFormFields, AuthFormStatus} from "../styled";

interface FormValues extends SignupDataToApi {
	passwordConfirmation: string;
}

const initialValues: FormValues = {
	username: "",
	email: "",
	password: "",
	passwordConfirmation: ""
};

const SignupForm: FC = () => {
	const dispatch = useTypedDispatch();

	const handleSubmit = async (
		values: FormValues,
		{setStatus}: FormikHelpers<FormValues>
	) => {
		await dispatch(signUpThunk(values, setStatus));
	};

	return (
		<>
			<Typography variant="h1" mb="lg">
				Sign <Typography variant="highlight">up</Typography>
			</Typography>
			<Formik
				initialValues={initialValues}
				validationSchema={signupFormValidationSchema}
				onSubmit={handleSubmit}
				validateOnBlur
			>
				<AuthForm>
					<AuthFormStatus />

					<AuthFormFields>
						<FormTextField
							name="username"
							InputProps={{placeholder: "Username"}}
						/>
						<FormTextField
							name="email"
							InputProps={{placeholder: "Email", type: "email"}}
						/>
						<FormTextField
							name="password"
							InputProps={{placeholder: "Password", type: "password"}}
						/>
						<FormTextField
							name="passwordConfirmation"
							InputProps={{placeholder: "Confirm Password", type: "password"}}
						/>
					</AuthFormFields>

					<FormButton>Sign up</FormButton>
				</AuthForm>
			</Formik>
			<Link as="routeLink" to={RouteName.LOGIN}>
				I already have an account
			</Link>
		</>
	);
};

export default SignupForm;
