import {RouteNames} from "@shared/constants";
import {FormButton, FormTextField} from "@shared/form";
import {useTypedDispatch} from "@shared/model";
import {Formik, FormikHelpers} from "formik";
import {FC, MouseEventHandler} from "react";
import {Link} from "@shared/ui";
import {LoginWithUsernameDataToApi} from "../../api/types";
import {loginFormValidationSchemas} from "../../lib/validationSchemas";
import {AuthForm, AuthFormFields, AuthFormStatus} from "../styled";
import loginWithUsernameThunk from "../../model/thunks/loginWithUsernameThunk";

interface Props {
	onLoginOptionButtonClick: MouseEventHandler;
}

interface FormValues extends LoginWithUsernameDataToApi {}

const LoginWithUsernameForm: FC<Props> = ({onLoginOptionButtonClick}) => {
	const dispatch = useTypedDispatch();

	const initialValues: FormValues = {username: "", password: ""};

	const handleSubmit = async (
		values: FormValues,
		{setStatus}: FormikHelpers<FormValues>
	) => {
		await dispatch(loginWithUsernameThunk(values, setStatus));
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={loginFormValidationSchemas.withUsername}
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
							name="password"
							InputProps={{placeholder: "Password", type: "password"}}
						/>
					</AuthFormFields>

					<FormButton>Log in</FormButton>
				</AuthForm>
			</Formik>

			<Link
				as="button"
				type="button"
				onClick={onLoginOptionButtonClick}
				mb="sm"
			>
				Log in with email
			</Link>

			<Link as="routeLink" to={RouteNames.Signup}>
				Create an account
			</Link>
		</>
	);
};

export default LoginWithUsernameForm;
