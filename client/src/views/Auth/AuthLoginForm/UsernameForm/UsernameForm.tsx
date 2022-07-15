import {
	FormButton,
	FormFields,
	FormLink,
	FormTextField
} from "@components/Form";
import useTypedDispatch from "@hooks/useTypedDispatch";
import AuthService from "@services/auth/auth.service";
import {HOME_ROUTE, SIGNUP_ROUTE} from "@utils/constants/routeNames";
import {usernameLoginFormValidation} from "@validation/index";
import {Form, Formik} from "formik";
import React, {Dispatch, FC, MouseEvent, SetStateAction} from "react";
import {useNavigate} from "react-router-dom";

interface UsernameFormProps {
	setWithUsername: Dispatch<SetStateAction<boolean>>;
}

const UsernameForm: FC<UsernameFormProps> = ({setWithUsername}) => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();

	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		setWithUsername(false);
	};

	return (
		<Formik
			initialValues={{username: "", password: ""}}
			validationSchema={usernameLoginFormValidation}
			onSubmit={async values => {
				await Promise.all([
					dispatch(AuthService.loginWithUsername(values)),
					navigate(HOME_ROUTE)
				]);
			}}
			validateOnBlur
		>
			<Form>
				<FormFields marginBottom="24px" gap="20px">
					<FormTextField name="username" type="text" placeholder="Username" />

					<FormTextField
						name="password"
						type="password"
						placeholder="Password"
					/>
				</FormFields>

				<FormButton marginBottom="12px">Log in</FormButton>

				<FormLink as="button" marginBottom="4px" onClick={handleClick}>
					Log in with email
				</FormLink>

				<FormLink to={SIGNUP_ROUTE}>Create an account</FormLink>
			</Form>
		</Formik>
	);
};

export default UsernameForm;
