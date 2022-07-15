import React, {FC, TextareaHTMLAttributes, useState} from "react";
import {TextareaAutosizeProps} from "react-textarea-autosize";
import {StyledTextarea, TextareaWrapper} from "./Textarea.styled";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
	TextareaAutosizeProps;

const Textarea: FC<TextareaProps> = props => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => setIsFocused(true);
	const handleBlur = () => setIsFocused(false);

	return (
		<TextareaWrapper isFocused={isFocused}>
			<StyledTextarea onFocus={handleFocus} onBlur={handleBlur} {...props} />
		</TextareaWrapper>
	);
};

export default Textarea;
