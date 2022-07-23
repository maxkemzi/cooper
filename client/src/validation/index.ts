import * as yup from "yup";

export const createFormValidation = yup.object().shape({
	title: yup
		.string()
		.required("Title is required!")
		.min(5, "Title minimum value is 5!")
		.max(25, "Title maximum value is 25!"),
	description: yup
		.string()
		.required("Description is required!")
		.min(10, "Title minimum value is 10!")
		.max(200, "Title maximum value is 200!"),
	workType: yup
		.string()
		.required("Work type is required!")
		.oneOf(["default", "remote"])
});

export const contactFormValidation = yup.object().shape({
	name: yup
		.string()
		.required("Name is required.")
		.max(200, "Name is too long."),
	email: yup.string().required("Email is required.").email("Invalid email."),
	text: yup
		.string()
		.required("Text is required.")
		.min(5, "Text is too short.")
		.max(200, "Text is too long.")
});

export const signupFormValidation = yup.object().shape({
	username: yup
		.string()
		.required("Username is required.")
		.min(3, "Username is too short.")
		.max(10, "Username is too long."),
	email: yup.string().required("Email is required.").email("Invalid email."),
	password: yup
		.string()
		.required("Password is required.")
		.min(4, "Password is too short.")
		.max(12, "Password is too long."),
	passwordConf: yup
		.string()
		.required("Please, confirm your password.")
		.oneOf([yup.ref("password")], "Passwords do not match.")
});

export const emailLoginFormValidation = yup.object().shape({
	email: yup.string().required("Email is required.").email("Invalid email."),
	password: yup
		.string()
		.required("Password is required.")
		.min(4, "Password is too short.")
		.max(12, "Password is too long.")
});

export const usernameLoginFormValidation = yup.object().shape({
	username: yup
		.string()
		.required("Username is required.")
		.min(3, "Username is too short.")
		.max(10, "Username is too long."),
	password: yup
		.string()
		.required("Password is required.")
		.min(4, "Password is too short.")
		.max(12, "Password is too long.")
});

export const editProfileFormValidation = yup.object().shape({
	username: yup
		.string()
		.required("Username is required.")
		.min(3, "Username is too short.")
		.max(10, "Username is too long."),
	email: yup.string().required("Email is required.").email("Invalid email."),
	location: yup.string(),
	description: yup
		.string()
		.min(10, "Description is too short.")
		.max(200, "Description is too long.")
});

export const editProjectFormValidation = yup.object().shape({
	title: yup
		.string()
		.required("Username is required.")
		.min(3, "Username is too short.")
		.max(10, "Username is too long."),
	description: yup
		.string()
		.min(10, "Description is too short.")
		.max(200, "Description is too long.")
});
