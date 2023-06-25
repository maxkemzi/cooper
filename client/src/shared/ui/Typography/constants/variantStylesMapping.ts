import {fontMixin} from "@shared/theme";
import {
	DefaultTheme,
	FlattenInterpolation,
	ThemeProps,
	css
} from "styled-components";
import {Variant} from "../types";

const variantStylesMapping: {
	[key in Variant]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
	h1: css`
		font-size: ${({theme}) => theme.fontSizes.mega};
		${fontMixin.montserrat.extraBold}
	`,
	h2: css`
		font-size: ${({theme}) => theme.fontSizes.xxxl};
		${fontMixin.montserrat.extraBold}
	`,
	h3: css`
		font-size: ${({theme}) => theme.fontSizes.xxl};
		${fontMixin.montserrat.extraBold}
	`,
	h4: css`
		font-size: ${({theme}) => theme.fontSizes.xl};
		${fontMixin.montserrat.extraBold}
	`,
	h5: css`
		font-size: ${({theme}) => theme.fontSizes.lg};
		${fontMixin.montserrat.extraBold}
	`,
	h6: css`
		font-size: ${({theme}) => theme.fontSizes.md};
		${fontMixin.montserrat.extraBold}
	`,
	subtitle1: css`
		font-size: ${({theme}) => theme.fontSizes.lg};
		line-height: 1.4;
		${fontMixin.montserrat.regular}
	`,
	subtitle2: css`
		font-size: ${({theme}) => theme.fontSizes.sm};
		${fontMixin.montserrat.semiBold}
	`,
	body1: css`
		font-size: ${({theme}) => theme.fontSizes.md};
		${fontMixin.montserrat.regular}
	`,
	body2: css`
		font-size: ${({theme}) => theme.fontSizes.sm};
		${fontMixin.montserrat.regular}
	`,
	button: css`
		font-size: ${({theme}) => theme.fontSizes.md};
		text-transform: uppercase;
		${fontMixin.montserrat.semiBold}
	`,
	link: css`
		color: ${({theme}) => theme.colors.secondary.main};
		font-size: ${({theme}) => theme.fontSizes.md};
		${fontMixin.montserrat.regular}
	`,
	highlight: css`
		color: ${({theme}) => theme.colors.secondary.main};
	`,
	inherit: css``
};

export default variantStylesMapping;
