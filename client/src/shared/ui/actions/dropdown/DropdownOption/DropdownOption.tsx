import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {ButtonHTMLAttributes, forwardRef} from "react";
import {DropdownOptionStyled, TypographyStyled} from "./DropdownOption.styled";

interface Props extends ThemingProps, ButtonHTMLAttributes<HTMLButtonElement> {
	isActive?: boolean;
}

const DropdownOption = forwardRef<HTMLButtonElement, Props>((props, ref) => {
	const {isActive, children, commonStyleProps, ...rest} =
		useCommonStyleProps(props);

	const color = isActive ? "secondaryLight" : "primary";
	const colorVariant = isActive ? "main" : "contrast";

	return (
		<DropdownOptionStyled
			ref={ref}
			type="button"
			{...commonStyleProps}
			{...rest}
		>
			<TypographyStyled
				color={color}
				colorVariant={colorVariant}
				variant="body1"
				forwardedAs="span"
			>
				{children}
			</TypographyStyled>
		</DropdownOptionStyled>
	);
});

export default DropdownOption;
