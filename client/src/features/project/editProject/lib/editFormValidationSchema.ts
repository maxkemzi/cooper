import {string, number, object} from "yup";

const editFormValidationSchema = object({
	title: string()
		.required("Title is required.")
		.min(5, "Title is too short.")
		.max(25, "Title is too long."),
	description: string()
		.required("Description is required.")
		.min(10, "Description is too short.")
		.max(400, "Description is too long."),
	visibility: string()
		.required("Visibility is required.")
		.oneOf(["public", "private"]),
	workType: string()
		.required("Employment type is required.")
		.oneOf(["onsite", "remote"]),
	budget: number().min(0).max(1_000_000, "Maximum budget value is 1,000,000.")
});

export default editFormValidationSchema;
