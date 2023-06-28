import {commonStyles} from "@shared/theme";
import styled, {css} from "styled-components";
import {StyleProps} from "./types";

const ListStyled = styled.ul<StyleProps>`
	display: flex;
	flex-wrap: wrap;
	align-items: ${({$align}) => $align};
	justify-content: ${({$justify}) => $justify};
	flex-direction: ${({$direction}) => $direction};
	gap: ${({theme, $gap}) => $gap && theme.spacing[$gap]};
	column-gap: ${({theme, $columnGap}) =>
		$columnGap && theme.spacing[$columnGap]};
	row-gap: ${({theme, $rowGap}) => $rowGap && theme.spacing[$rowGap]};
	${({$noWrap}) =>
		$noWrap &&
		css`
			flex-wrap: nowrap;
			overflow: auto;
		`}

	${commonStyles}
`;

export {ListStyled};
