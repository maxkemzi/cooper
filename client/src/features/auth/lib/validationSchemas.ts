import {string, object, ref} from "yup";

const usernameValidation = string()
	.required("Username is required.")
	.min(3, "Username is too short.")
	.max(10, "Username is too long.");

const emailValidation = string()
	.required("Email is required.")
	.email("Invalid email.")
	.max(200, "Email is too long.");

const passwordValidation = string()
	.required("Password is required.")
	.min(4, "Password is too short.")
	.max(12, "Password is too long.");

const passwordConfirmationValidation = string()
	.required("Please, confirm your password.")
	.oneOf([ref("password")], "Passwords do not match.");

const signupFormValidationSchema = object({
	username: usernameValidation,
	email: emailValidation,
	password: passwordValidation,
	passwordConfirmation: passwordConfirmationValidation
});

const loginFormValidationSchemas = {
	withUsername: object({
		username: usernameValidation,
		password: passwordValidation
	}),
	withEmail: object({
		email: emailValidation,
		password: passwordValidation
	})
};

export {signupFormValidationSchema, loginFormValidationSchemas};
