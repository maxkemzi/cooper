import {MarginProps} from "@customTypes/styled";
import {useFormikContext} from "formik";
import React, {ButtonHTMLAttributes, FC, ReactNode} from "react";
import Button from "../../Button/Button";

interface FormButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		MarginProps {
	children: ReactNode;
	disableCondition?: boolean;
}

const FormButton: FC<FormButtonProps> = ({
	children,
	disableCondition,
	...props
}) => {
	const {isValid, dirty, isSubmitting, isValidating} = useFormikContext();

	return (
		<Button
			disabled={
				(!isValid && !dirty) ||
				(isSubmitting && !isValidating) ||
				disableCondition
			}
			type="submit"
			{...props}
		>
			{children}
		</Button>
	);
};

export default FormButton;
