import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {HTMLAttributes, PropsWithChildren, forwardRef} from "react";
import {Typography} from "../../Typography";
import {FieldStyled, LabelStyled} from "./Field.styled";

interface BaseProps extends ThemingProps, HTMLAttributes<HTMLDivElement> {
	inputId: string;
	error?: string;
	isInvalid?: boolean;
}

type Props = PropsWithChildren<BaseProps>;

const Field = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {error, inputId, children, isInvalid, commonStyleProps, ...rest} =
		useCommonStyleProps(props);

	return (
		<FieldStyled
			ref={ref}
			$isInvalid={isInvalid}
			{...commonStyleProps}
			{...rest}
		>
			{children}
			{isInvalid && error ? (
				<LabelStyled htmlFor={inputId}>
					<Typography color="error" as="span" variant="body2">
						{error}
					</Typography>
				</LabelStyled>
			) : null}
		</FieldStyled>
	);
});

export default Field;
