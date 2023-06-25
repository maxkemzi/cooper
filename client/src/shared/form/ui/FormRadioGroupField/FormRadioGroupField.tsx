import {ThemingProps} from "@shared/theme";
import {Radio} from "@shared/ui";
import type {RadioProps} from "@shared/ui";
import RadioGroupField from "@shared/ui/dataInput/RadioGroupField/RadioGroupField";
import {useField} from "formik";
import {FC, ReactElement} from "react";

interface Props extends ThemingProps {
	name: string;
	title: string;
	children: ReactElement<typeof Radio> | ReactElement<typeof Radio>[];
	RadioProps?: Partial<RadioProps>;
}

const FormRadioGroupField: FC<Props> = ({
	name,
	children,
	title,
	RadioProps,
	...rest
}) => {
	const [field, meta] = useField(name);

	return (
		<RadioGroupField
			groupTitle={title}
			error={meta.error}
			isInvalid={!!meta.error && meta.touched}
			RadioProps={{
				InputProps: {
					name: field.name,
					onChange: field.onChange,
					onBlur: field.onBlur,
					...RadioProps?.InputProps
				},
				...RadioProps
			}}
			{...rest}
		>
			{children}
		</RadioGroupField>
	);
};

export default FormRadioGroupField;
