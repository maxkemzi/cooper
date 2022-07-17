import {MarginProps} from "@customTypes/styled";
import {useFormikContext} from "formik";
import React, {ButtonHTMLAttributes, FC, ReactNode} from "react";
import Button from "../../Button/Button";

interface FormButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		MarginProps {
	children: ReactNode;
}

const FormButton: FC<FormButtonProps> = ({children, ...props}) => {
	const {isValid, dirty, isSubmitting, isValidating} = useFormikContext();

	return (
		<Button
			disabled={(!isValid && !dirty) || (isSubmitting && !isValidating)}
			type="submit"
			{...props}
		>
			{children}
		</Button>
	);
};

export default FormButton;
