import * as yup from "yup";

export const createFormValidation = yup.object().shape({
	title: yup
		.string()
		.required("Title is required.")
		.min(5, "Title is too short.")
		.max(25, "Title is too long."),
	description: yup
		.string()
		.required("Description is required.")
		.min(10, "Description is too short.")
		.max(400, "Description is too long."),
	visibility: yup
		.string()
		.required("Visibility is required.")
		.oneOf(["public", "private"]),
	workType: yup
		.string()
		.required("Employment type is required.")
		.oneOf(["default", "remote"]),
	budget: yup
		.number()
		.min(0)
		.max(1_000_000, "Maximum budget value is 1,000,000.")
});

export const contactFormValidation = yup.object().shape({
	name: yup
		.string()
		.required("Name is required.")
		.min(3, "Name is too short.")
		.max(16, "Name is too long."),
	email: yup
		.string()
		.required("Email is required.")
		.email("Invalid email.")
		.max(200, "Email is too long."),
	text: yup
		.string()
		.required("Text is required.")
		.min(10, "Text is too short.")
		.max(200, "Text is too long.")
});

export const signupFormValidation = yup.object().shape({
	username: yup
		.string()
		.required("Username is required.")
		.min(3, "Username is too short.")
		.max(10, "Username is too long."),
	email: yup
		.string()
		.required("Email is required.")
		.email("Invalid email.")
		.max(200, "Email is too long."),
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
	email: yup
		.string()
		.required("Email is required.")
		.email("Invalid email.")
		.max(200, "Email is too long."),
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
	email: yup
		.string()
		.required("Email is required.")
		.email("Invalid email.")
		.max(200, "Email is too long."),
	location: yup
		.string()
		.min(3, "Location is too short.")
		.max(30, "Location is too long."),
	description: yup
		.string()
		.min(10, "Description is too short.")
		.max(200, "Description is too long.")
});

export const editProjectFormValidation = yup.object().shape({
	title: yup
		.string()
		.required("Title is required.")
		.min(5, "Title is too short.")
		.max(25, "Title is too long."),
	description: yup
		.string()
		.required("Description is required.")
		.min(10, "Description is too short.")
		.max(400, "Description is too long."),
	visibility: yup
		.string()
		.required("Visibility is required.")
		.oneOf(["public", "private"]),
	workType: yup
		.string()
		.required("Employment type is required.")
		.oneOf(["default", "remote"]),
	budget: yup
		.number()
		.min(0)
		.max(1_000_000, "Maximum budget value is 1,000,000.")
});
