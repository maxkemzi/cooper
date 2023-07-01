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
	`,
	md: css`
		padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.md};
	`,
	sm: css`
		padding: ${({theme}) => theme.spacing.xs} ${({theme}) => theme.spacing.md};
	`
};

export default sizeStylesMapping;
