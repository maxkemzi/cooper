import {MarginProps} from "@customTypes/styled";
import {useField} from "formik";
import React, {FC, InputHTMLAttributes} from "react";
import Input from "../../Input/Input";
import PasswordInput from "../../PasswordInput/PasswordInput";
import FormField from "../FormField/FormField";

const FormTextField: FC<
	InputHTMLAttributes<HTMLInputElement> & MarginProps
> = ({
	name,
	type,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	...props
}) => {
	const [field, meta] = useField(name);

	return (
		<FormField
			marginRight={marginRight}
			marginBottom={marginBottom}
			marginLeft={marginLeft}
			marginTop={marginTop}
			name={field.name}
			error={meta.error}
			isTouched={meta.touched}
		>
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
