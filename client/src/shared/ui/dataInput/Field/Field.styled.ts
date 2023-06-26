import {commonStyles} from "@shared/theme";
import styled, {css} from "styled-components";

interface Props {
	$isInvalid?: boolean;
}

const FieldStyled = styled.div<Props>`
	position: relative;
	display: flex;
	flex-direction: column;
	row-gap: ${({theme}) => theme.spacing.xs};

	&::before {
		content: "";
		position: absolute;
		left: -8px;
		top: 0;
		background: ${({theme}) => theme.colors.error.main};
		width: 2px;
		height: 0;
		transition: height ${({theme}) => theme.transitions.main};
	}

	${({$isInvalid}) =>
		$isInvalid &&
		css`
			&::before {
				height: 100%;
			}
		`}

	${commonStyles}
`;

const LabelStyled = styled.label`
	margin-top: auto;
`;

export {FieldStyled, LabelStyled};
