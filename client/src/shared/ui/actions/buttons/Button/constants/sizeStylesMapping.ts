import {
	DefaultTheme,
	FlattenInterpolation,
	ThemeProps,
	css
} from "styled-components";
import {Size} from "../types";

const sizeStylesMapping: {
	[key in Size]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
	lg: css`
		padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.lg};
		${({theme}) => theme.media.md} {
			padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.md};
		}
	`,
	md: css`
		padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.md};
		${({theme}) => theme.media.md} {
			padding: ${({theme}) => theme.spacing.xs} ${({theme}) => theme.spacing.sm};
		}
	`,
	sm: css`
		font-size: ${({theme}) => theme.fontSizes.sm};
		padding: ${({theme}) => theme.spacing.xs} ${({theme}) => theme.spacing.md};
	`
};

export default sizeStylesMapping;
