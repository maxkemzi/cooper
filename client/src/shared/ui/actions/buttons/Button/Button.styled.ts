import {commonStyles} from "@shared/theme";
import styled from "styled-components";
import getStylesByVariantAndColor from "./constants/getStylesByVariantAndColor";
import sizeStylesMapping from "./constants/sizeStylesMapping";
import {StyleProps} from "./types";

const ButtonStyled = styled.button<StyleProps>`
	text-align: center;
	border-radius: ${({theme}) => theme.borderRadiuses.full};

	${({$size}) => sizeStylesMapping[$size]}
	${({$variant, $color}) => getStylesByVariantAndColor($variant, $color)}

	${commonStyles}
`;

export {ButtonStyled};
