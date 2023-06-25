import {RouteNames} from "@shared/constants";
import {FormButton, FormTextField} from "@shared/form";
import {useTypedDispatch} from "@shared/model";
import {Link} from "@shared/ui";
import {Formik, FormikHelpers} from "formik";
import {FC, MouseEventHandler} from "react";
import {LoginWithEmailDataToApi} from "../../api/types";
import {loginFormValidationSchemas} from "../../lib/validationSchemas";
import loginWithEmailThunk from "../../model/thunks/loginWithEmailThunk";
import {AuthForm, AuthFormFields, AuthFormStatus} from "../styled";

interface Props {
	onLoginOptionButtonClick: MouseEventHandler;
}

interface FormValues extends LoginWithEmailDataToApi {}

const LoginWithEmailForm: FC<Props> = ({onLoginOptionButtonClick}) => {
	const dispatch = useTypedDispatch();

	const initialValues: FormValues = {email: "", password: ""};

	const handleSubmit = async (
		values: FormValues,
		{setStatus}: FormikHelpers<FormValues>
	) => {
		dispatch(loginWithEmailThunk(values, setStatus));
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={loginFormValidationSchemas.withEmail}
				onSubmit={handleSubmit}
				validateOnBlur
			>
				<AuthForm>
					<AuthFormStatus />
					<AuthFormFields>
						<FormTextField name="email" InputProps={{placeholder: "Email"}} />

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
				mb="xs"
			>
				Log in with username
			</Link>
			<Link as="routeLink" to={RouteNames.Signup}>
				Create an account
			</Link>
		</>
	);
};

export default LoginWithEmailForm;
