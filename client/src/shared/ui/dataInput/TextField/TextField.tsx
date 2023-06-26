import {ThemingProps} from "@shared/theme";
import {HTMLAttributes, HTMLInputTypeAttribute, forwardRef, useId} from "react";
import Field from "../Field/Field";
import Input, {type InputProps} from "../Input/Input";
import PasswordInput, {
	type PasswordInputProps
} from "../PasswordInput/PasswordInput";
import Textarea, {type TextareaProps} from "../Textarea/Textarea";

type BaseProps = ThemingProps &
	HTMLAttributes<HTMLDivElement> & {
		isInvalid?: boolean;
		error?: string;
	};

type NonMultilineProps = {
	isMultiline?: false;
	InputProps?:
		| (Partial<InputProps> & {
				type?: Exclude<HTMLInputTypeAttribute, "password">;
		  })
		| (Partial<PasswordInputProps> & {
				type: Extract<HTMLInputTypeAttribute, "password">;
		  });
	TextareaProps?: never;
};

type MultilineProps = {
	isMultiline: true;
	InputProps?: never;
	TextareaProps?: Partial<TextareaProps>;
};

type Props = BaseProps & (NonMultilineProps | MultilineProps);

const TextField = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {error, isInvalid, isMultiline, TextareaProps, InputProps, ...rest} =
		props;

	const id = useId();

	const renderInputElement = () => {
		if (InputProps?.type === "password") {
			return <PasswordInput InputProps={{id, ...InputProps}} />;
		}

		return <Input id={id} {...InputProps} />;
	};

	return (
		<Field ref={ref} inputId={id} error={error} isInvalid={isInvalid} {...rest}>
			{isMultiline ? (
				<Textarea id={id} {...TextareaProps} />
			) : (
				renderInputElement()
			)}
		</Field>
	);
});

export type {Props as TextFieldProps};
export default TextField;
