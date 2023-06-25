import {ThemingProps} from "@shared/theme";
import {Button} from "@shared/ui";
import {useFormikContext} from "formik";
import {FC, ReactNode} from "react";

interface Props extends ThemingProps {
	children: ReactNode;
	isDisabled?: boolean;
}

const FormButton: FC<Props> = ({children, isDisabled, ...rest}) => {
	const {isValid, dirty, isSubmitting, isValidating} = useFormikContext();

	return (
		<Button
			disabled={
				(!isValid && !dirty) || (isSubmitting && !isValidating) || isDisabled
			}
			type="submit"
			{...rest}
		>
			{children}
		</Button>
	);
};

export default FormButton;
