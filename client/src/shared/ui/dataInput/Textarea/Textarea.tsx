import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {TextareaHTMLAttributes, forwardRef} from "react";
import {TextareaStyled} from "./Textarea.styled";

type Props = ThemingProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
	const {commonStyleProps, ...rest} = useCommonStyleProps(props);

	return <TextareaStyled ref={ref} {...rest} />;
});

export type {Props as TextareaProps};
export default Textarea;
