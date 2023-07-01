import {commonStyles} from "@shared/theme";
import styled, {css} from "styled-components";
import variantStylesMapping from "./constants/variantStylesMapping";
import {StyleProps} from "./types";

const TypographyStyled = styled.span<StyleProps>`
	overflow-wrap: anywhere;
	color: ${({$color, $colorVariant, theme}) =>
		$color !== "inherit" && theme.colors[$color][$colorVariant]};
	${({$variant}) => variantStylesMapping[$variant]}
	${({$noWrap}) =>
		$noWrap &&
		css`
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		`}
	text-transform: ${({$textTransform}) => $textTransform};

	${commonStyles}
`;

export {TypographyStyled};
