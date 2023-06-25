import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {HTMLAttributes, PropsWithChildren, forwardRef} from "react";
import {FieldStyled, LabelStyled} from "./Field.styled";

interface BaseProps extends ThemingProps, HTMLAttributes<HTMLDivElement> {
	inputId: string;
	error?: string;
	isInvalid?: boolean;
}

type Props = PropsWithChildren<BaseProps>;

const Field = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		error,
		inputId,
		children,
		isInvalid = false,
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	return (
		<FieldStyled
			ref={ref}
			isInvalid={isInvalid}
			{...commonStyleProps}
			{...rest}
		>
			{children}
			{isInvalid && error ? (
				<LabelStyled htmlFor={inputId}>{error}</LabelStyled>
			) : null}
		</FieldStyled>
	);
});

export default Field;
