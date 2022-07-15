import React, {FC, ReactNode} from "react";
import {FormFieldLabel, StyledFormField} from "./FormField.styled";

interface FormFieldProps {
	error: string;
	isTouched: boolean;
	name: string;
	children: ReactNode;
}

const FormField: FC<FormFieldProps> = ({error, isTouched, name, children}) => (
	<StyledFormField isInvalid={error && isTouched}>
		{children}
		{isTouched && error && (
			<FormFieldLabel htmlFor={name}>{error}</FormFieldLabel>
		)}
	</StyledFormField>
);

export default FormField;
