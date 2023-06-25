import {ColorVariant, ThemingProps, useCommonStyleProps} from "@shared/theme";
import {ElementType, PropsWithChildren, forwardRef} from "react";
import {TypographyStyled} from "./Typography.styled";
import variantElementMapping from "./constants/variantElementMapping";
import {Color, StyleProps, Variant, TextTransform} from "./types";

interface Props extends ThemingProps {
	variant?: Variant;
	color?: Color;
	colorVariant?: ColorVariant;
	noWrap?: boolean;
	as?: ElementType;
	textTransform?: TextTransform;
}

const Typography = forwardRef<
	HTMLHeadingElement | HTMLSpanElement | HTMLParagraphElement,
	PropsWithChildren<Props>
>((props, ref) => {
	const {
		children,
		as,
		textTransform,
		noWrap,
		variant = "body1",
		color = "textPrimary",
		colorVariant = "main",
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	const Element = as || variantElementMapping[variant] || "span";

	const styleProps: StyleProps = {
		$color: color,
		$colorVariant: colorVariant,
		$noWrap: noWrap,
		$variant: variant,
		$textTransform: textTransform
	};

	return (
		<TypographyStyled
			ref={ref}
			as={Element}
			{...commonStyleProps}
			{...styleProps}
			{...rest}
		>
			{children}
		</TypographyStyled>
	);
});

export default Typography;
