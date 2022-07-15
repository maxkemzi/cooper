import {useField} from "formik";
import React, {FC, InputHTMLAttributes} from "react";
import Input from "../../Input/Input";
import PasswordInput from "../../PasswordInput/PasswordInput";
import FormField from "../FormField/FormField";

const FormTextField: FC<InputHTMLAttributes<HTMLInputElement>> = ({
	name,
	type,
	...props
}) => {
	const [field, meta] = useField(name);

	return (
		<FormField name={field.name} error={meta.error} isTouched={meta.touched}>
			{type === "password" ? (
				<PasswordInput
					name={field.name}
					value={field.value}
					onBlur={field.onBlur}
					onChange={field.onChange}
					{...props}
				/>
			) : (
				<Input
					name={field.name}
					value={field.value}
					onBlur={field.onBlur}
					onChange={field.onChange}
					type={type}
					{...props}
				/>
			)}
		</FormField>
	);
};

export default FormTextField;
