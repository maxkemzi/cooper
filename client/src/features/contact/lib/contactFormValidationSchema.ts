import {object, string} from "yup";

const contactFormValidationSchema = object({
	name: string()
		.required("Name is required.")
		.min(3, "Name is too short.")
		.max(16, "Name is too long."),
	email: string()
		.required("Email is required.")
		.email("Invalid email.")
		.max(200, "Email is too long."),
	text: string()
		.required("Text is required.")
		.min(10, "Text is too short.")
		.max(200, "Text is too long.")
});

export default contactFormValidationSchema;
