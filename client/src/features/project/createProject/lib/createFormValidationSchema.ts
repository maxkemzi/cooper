import {object, string, number, array} from "yup";

const createFormValidationSchema = object({
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
		.required("Work type is required.")
		.oneOf(["onsite", "remote"]),
	categoryIds: array()
		.of(string())
		.min(1, "At least one category is required."),
	budget: number()
		.required("Budget is required.")
		.min(0)
		.max(1_000_000, "Maximum budget value is 1,000,000.")
});

export default createFormValidationSchema;
