import {useField} from "formik";
import React, {FC} from "react";
import LocationInput from "../../LocationInput/LocationInput";
import FormField from "../FormField/FormField";

interface FormLocationFieldProps {
	name: string;
	placeholder: string;
}

const FormLocationField: FC<FormLocationFieldProps> = ({name, placeholder}) => {
	const [field, meta, helpers] = useField(name);

	const handleChange = (address: string) => {
		helpers.setValue(address);
	};

	return (
		<FormField name={name} isTouched={meta.touched} error={meta.error}>
			<LocationInput
				name={name}
				placeholder={placeholder}
				value={field.value}
				onChange={handleChange}
				onBlur={field.onBlur}
			/>
		</FormField>
	);
};

export default FormLocationField;
