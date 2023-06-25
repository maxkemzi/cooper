import {ThemingProps} from "@shared/theme";
import {HTMLAttributes, HTMLInputTypeAttribute, forwardRef, useId} from "react";
import Field from "../Field/Field";
import Textarea, {
	TextareaProps as TextareaPropsType
} from "../Textarea/Textarea";
import {
	Input,
	InputProps as InputPropsType,
	PasswordInput,
	PasswordInputProps
} from "../input";

type BaseProps = ThemingProps &
	HTMLAttributes<HTMLDivElement> & {
		isInvalid?: boolean;
		error?: string;
	};

type NonMultilineProps = {
	isMultiline?: false;
	InputProps?:
		| (InputPropsType & {type?: Exclude<HTMLInputTypeAttribute, "password">})
		| (PasswordInputProps & {
				type: Extract<HTMLInputTypeAttribute, "password">;
		  });
	TextareaProps?: never;
};

type MultilineProps = {
	isMultiline: true;
	InputProps?: never;
	TextareaProps?: TextareaPropsType;
};

type Props = BaseProps & (NonMultilineProps | MultilineProps);

const TextField = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {error, isInvalid, isMultiline, TextareaProps, InputProps, ...rest} =
		props;

	const id = useId();

	const getInputElement = () => {
		if (InputProps?.type === "password") {
			return PasswordInput;
		}

		return Input;
	};

	const InputElement = getInputElement();

	return (
		<Field ref={ref} inputId={id} error={error} isInvalid={isInvalid} {...rest}>
			{isMultiline ? (
				<Textarea id={id} {...TextareaProps} />
			) : (
				<InputElement id={id} {...InputProps} />
			)}
		</Field>
	);
});

export type {Props as TextFieldProps};
export default TextField;
