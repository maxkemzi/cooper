import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import merge from "lodash.merge";
import {LabelHTMLAttributes, forwardRef, useId} from "react";
import {
	RadioGroupContextValue,
	useRadioGroupContext
} from "../RadioGroup/RadioGroup";
import type {InputProps} from "../input";
import {FakeStyled, InputStyled, RadioStyled} from "./Radio.styled";

interface Props extends ThemingProps, LabelHTMLAttributes<HTMLLabelElement> {
	InputProps?: InputProps;
	label: string;
}

const Radio = forwardRef<HTMLLabelElement, Props>((props, ref) => {
	const {RadioProps} = useRadioGroupContext() as RadioGroupContextValue;

	const mergedProps = merge({}, props, RadioProps);

	const {InputProps, label, commonStyleProps, ...rest} =
		useCommonStyleProps(mergedProps);

	const id = useId();

	return (
		<RadioStyled ref={ref} htmlFor={id} {...commonStyleProps} {...rest}>
			<InputStyled id={id} type="radio" {...InputProps} />
			<FakeStyled />
			<span>{label}</span>
		</RadioStyled>
	);
});

export type {Props as RadioProps};
export default Radio;
