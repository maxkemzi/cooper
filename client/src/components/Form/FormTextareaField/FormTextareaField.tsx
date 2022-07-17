import {useField} from "formik";
import React, {FC, TextareaHTMLAttributes} from "react";
import Textarea from "../../Textarea/Textarea";
import FormField from "../FormField/FormField";

const FormTextareaField: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
	name,
	...props
}) => {
	const [field, meta] = useField(name);

	return (
		<FormField name={field.name} error={meta.error} isTouched={meta.touched}>
			<Textarea
				name={field.name}
				value={field.value}
				onChange={field.onChange}
				onBlur={field.onBlur}
				{...props}
			/>
		</FormField>
	);
};

export default FormTextareaField;
