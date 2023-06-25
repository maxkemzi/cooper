import {object, string} from "yup";

const editProfileFormValidationSchema = object({
	username: string()
		.min(3, "Username is too short.")
		.max(10, "Username is too long."),
	email: string().email("Invalid email.").max(200, "Email is too long."),
	location: string()
		.nullable()
		.min(3, "Location is too short.")
		.max(30, "Location is too long."),
	description: string()
		.nullable()
		.min(10, "Description is too short.")
		.max(200, "Description is too long.")
});

export default editProfileFormValidationSchema;
