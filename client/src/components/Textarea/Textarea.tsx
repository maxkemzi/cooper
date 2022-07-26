import React, {FocusEvent, FC, TextareaHTMLAttributes, useState} from "react";
import {StyledTextarea, TextareaWrapper} from "./Textarea.styled";

const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
	onBlur,
	...props
}) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => setIsFocused(true);
	const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
		onBlur(e);
		setIsFocused(false);
	};

	return (
		<TextareaWrapper isFocused={isFocused}>
			<StyledTextarea onFocus={handleFocus} onBlur={handleBlur} {...props} />
		</TextareaWrapper>
	);
};

export default Textarea;
