import {ThemingProps} from "@shared/theme";
import {HTMLAttributes, forwardRef, useId} from "react";
import Field from "../Field/Field";
import Input, {type InputProps} from "../Input/Input";
import PasswordInput, {
	PasswordInputProps
} from "../PasswordInput/PasswordInput";
import Textarea, {type TextareaProps} from "../Textarea/Textarea";

type BaseProps = ThemingProps &
	HTMLAttributes<HTMLDivElement> & {
		isInvalid?: boolean;
		error?: string;
	};

type NonMultilineProps = {
	isMultiline?: false;
	InputProps?: InputProps | PasswordInputProps;
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
		const slotInProps =
			InputProps && ("startSlot" in InputProps || "endSlot" in InputProps);

		const type = slotInProps ? InputProps?.InputProps?.type : InputProps?.type;

		if (type === "password") {
			return <PasswordInput InputProps={{id, ...InputProps}} />;
		}

		if (slotInProps) {
			return (
				<Input InputProps={{id, ...InputProps.InputProps}} {...InputProps} />
			);
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
