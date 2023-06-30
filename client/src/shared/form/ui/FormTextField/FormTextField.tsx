import {ThemingProps} from "@shared/theme";
import {TextField, TextFieldProps} from "@shared/ui";
import {useField} from "formik";
import {forwardRef} from "react";

type BaseProps = ThemingProps & {
	name: string;
};

type Props = BaseProps & TextFieldProps;

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
			// TODO: clean the following mess
			InputProps={
				InputProps && ("startSlot" in InputProps || "endSlot" in InputProps)
					? {
							...InputProps,
							InputProps: {...InputProps.InputProps, ...fieldProps}
					  }
					: {...InputProps, ...fieldProps}
			}
			{...commonProps}
			{...rest}
		/>
	);
});

export default FormTextField;
