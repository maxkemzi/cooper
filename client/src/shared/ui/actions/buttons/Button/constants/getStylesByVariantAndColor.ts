import {ColorName} from "@shared/theme";
import {
	DefaultTheme,
	FlattenInterpolation,
	ThemeProps,
	css
} from "styled-components";
import {Variant} from "../types";

const getStylesByVariantAndColorName = (
	variant: Variant,
	color: ColorName
): FlattenInterpolation<ThemeProps<DefaultTheme>> | null => {
	switch (variant) {
		case "solid":
			return css`
				color: ${({theme}) => theme.colors[color].contrast};
				background: ${({theme}) => theme.colors[color].main};
				transition: all ${({theme}) => theme.transitions.main};

				&:hover:not(:disabled) {
					box-shadow: ${({theme}) => theme.boxShadows.main};
				}

				&:disabled {
					background: ${({theme}) => theme.colors.disabled.main};
				}
			`;
		case "outline":
			return css`
				color: ${({theme}) => theme.colors[color].main};
				border: 1px solid ${({theme}) => theme.colors[color].main};
				background: transparent;
				transition: all ${({theme}) => theme.transitions.main}

				&:disabled {
					border-color: ${({theme}) => theme.colors.disabled.main};
					color: ${({theme}) => theme.colors.disabled.main};
				}
			`;
		default:
			return null;
	}
};

export default getStylesByVariantAndColorName;
