import {SpacingSize, ThemingProps, useCommonStyleProps} from "@shared/theme";
import {
	HTMLAttributes,
	InputHTMLAttributes,
	ReactNode,
	forwardRef
} from "react";
import {
	EndContentStyled,
	InputStyled,
	StartContentStyled,
	WrapperStyled
} from "./Input.styled";
import {StyleProps} from "./types";

type BaseProps = ThemingProps;

type PropsWithSlot = HTMLAttributes<HTMLDivElement> & {
	InputProps?: InputHTMLAttributes<HTMLInputElement>;
	gap?: SpacingSize;
} & (
		| {
				startSlot?: never;
				endSlot: ReactNode;
		  }
		| {startSlot: ReactNode; endSlot?: never}
		| {
				startSlot: ReactNode;
				endSlot: ReactNode;
		  }
	);

type PropsWithoutSlot = InputHTMLAttributes<HTMLInputElement> & {
	InputProps?: never;
	startSlot?: never;
	endSlot?: never;
	gap?: never;
};

type Props = BaseProps & (PropsWithSlot | PropsWithoutSlot);

// TODO: add correct ref type for the element
const Input = forwardRef<any, Props>((props, ref) => {
	const {
		startSlot,
		endSlot,
		InputProps,
		gap = "md",
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	if (startSlot || endSlot) {
		const styleProps: StyleProps = {};

		if (startSlot) {
			styleProps.$startGap = gap;
		}

		if (endSlot) {
			styleProps.$endGap = gap;
		}

		return (
			<WrapperStyled ref={ref} {...commonStyleProps} {...rest}>
				{startSlot ? (
					<StartContentStyled>{startSlot}</StartContentStyled>
				) : null}
				{endSlot ? <EndContentStyled>{endSlot}</EndContentStyled> : null}
				<InputStyled {...styleProps} {...InputProps} />
			</WrapperStyled>
		);
	}

	return <InputStyled ref={ref} {...commonStyleProps} {...rest} />;
});

export type {Props as InputProps};
export default Input;
