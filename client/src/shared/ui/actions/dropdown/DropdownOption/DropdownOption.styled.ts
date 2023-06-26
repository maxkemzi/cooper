import {commonStyles} from "@shared/theme";
import styled, {css} from "styled-components";
import {Typography} from "../../../Typography";

const TypographyStyled = styled(Typography)`
	transition: color ${({theme}) => theme.transitions.main};
`;

const DropdownOptionStyled = styled.button`
	width: 100%;
	text-align: left;
	cursor: pointer;
	padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.lg};

	&:hover ${TypographyStyled} {
		color: ${({theme}) => theme.colors.secondaryLight.main};
	}

	${({disabled}) =>
		disabled &&
		css`
			cursor: auto;
		`}

	${commonStyles}
`;

export {DropdownOptionStyled, TypographyStyled};
