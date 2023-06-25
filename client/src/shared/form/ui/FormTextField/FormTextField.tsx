import {ThemingProps} from "@shared/theme";
import {TextField, TextFieldProps} from "@shared/ui";
import {useField} from "formik";
import {forwardRef} from "react";

type BaseProps = ThemingProps & {
	name: string;
};

type Props = BaseProps &
	OmitDistributive<TextFieldProps, "error" | "isInvalid">;

const FormTextField = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {name, isMultiline, TextareaProps, InputProps, ...rest} = props;
	const [field, meta] = useField(name);

	const commonProps = {
		ref,
		error: meta.error,
		isInvalid: !!meta.error && meta.touched
	};

	const fieldProps = {
		name: field.name,
		value: field.value,
		onChange: field.onChange,
		onBlur: field.onBlur
	};

	if (isMultiline) {
		return (
			<TextField
				TextareaProps={{...fieldProps, ...TextareaProps}}
				isMultiline
				{...commonProps}
				{...rest}
			/>
		);
	}

	return (
		<TextField
			InputProps={{...fieldProps, ...InputProps}}
			{...commonProps}
			{...rest}
		/>
	);
});

export default FormTextField;
