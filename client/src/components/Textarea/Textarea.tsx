import React, {FC, TextareaHTMLAttributes, useState} from "react";
import {StyledTextarea, TextareaWrapper} from "./Textarea.styled";

const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = props => {
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
