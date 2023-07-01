import {ColorManipulator, commonStyles} from "@shared/theme";
import styled, {css} from "styled-components";
import {StyleProps} from "./types";

const inputStyles = css<StyleProps>`
	width: 100%;
	border: 1px solid
		${({theme}) =>
			ColorManipulator.toRgbaString(theme.colors.textPrimary.main, 0.4)};
	border-radius: ${({theme}) => theme.borderRadiuses.main};
	transition: border-color ${({theme}) => theme.transitions.main};
	font-size: ${({theme}) => theme.fontSizes.md};
	background: ${({theme}) => theme.colors.background.main};
	padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.lg};

	&:hover {
		border-color: ${({theme}) => theme.colors.textPrimary.main};
	}

	&:focus {
		outline-color: ${({theme}) => theme.colors.secondary.main};
		outline-style: solid;
	}

	&::placeholder {
		opacity: 1;
		color: ${({theme}) => theme.colors.textSecondary.main};
	}
`;

const InputStyled = styled.input`
	${inputStyles}
	${commonStyles}
`;

export {InputStyled, inputStyles};
