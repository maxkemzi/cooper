import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {
	FocusEventHandler,
	TextareaHTMLAttributes,
	forwardRef,
	useState
} from "react";
import {InputStyled, TextareaStyled} from "./Textarea.styled";

interface Props
	extends ThemingProps,
		TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
	const {commonStyleProps, onFocus, onBlur, ...rest} =
		useCommonStyleProps(props);
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus: FocusEventHandler<HTMLTextAreaElement> = e => {
		onFocus?.(e);
		setIsFocused(true);
	};

	const handleBlur: FocusEventHandler<HTMLTextAreaElement> = e => {
		onBlur?.(e);
		setIsFocused(false);
	};

	return (
		<TextareaStyled $isFocused={isFocused} {...commonStyleProps}>
			<InputStyled
				ref={ref}
				onFocus={handleFocus}
				onBlur={handleBlur}
				{...rest}
			/>
		</TextareaStyled>
	);
});

export type {Props as TextareaProps};
export default Textarea;
