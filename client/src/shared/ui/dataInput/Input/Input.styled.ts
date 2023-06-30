import {ColorManipulator, commonStyles} from "@shared/theme";
import styled, {css} from "styled-components";
import {StyleProps} from "./types";

const inputStyles = css<StyleProps>`
	width: 100%;
	border: 1px solid
		${({theme}) =>
			ColorManipulator.toRgbaString(theme.colors.textPrimary.main, 0.4)};
	border-radius: ${({theme}) => theme.borderRadiuses.main};
	padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.lg};
	transition: border-color ${({theme}) => theme.transitions.main};
	font-size: ${({theme}) => theme.fontSizes.md};
	background: ${({theme}) => theme.colors.background.main};

	padding-right: ${({theme, $endGap}) =>
		$endGap && `calc(${theme.spacing.lg} + ${theme.spacing[$endGap]})`};

	padding-left: ${({theme, $startGap}) =>
		$startGap && `calc(${theme.spacing.lg} + ${theme.spacing[$startGap]})`};

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

const WrapperStyled = styled.div`
	position: relative;

	${commonStyles}
`;

const StartContentStyled = styled.div`
	position: absolute;
	top: 50%;
	left: ${({theme}) => theme.spacing.lg};
	transform: translateY(-50%);
`;

const EndContentStyled = styled.div`
	position: absolute;
	top: 50%;
	right: ${({theme}) => theme.spacing.lg};
	transform: translateY(-50%);
`;

export {
	EndContentStyled,
	InputStyled,
	StartContentStyled,
	WrapperStyled,
	inputStyles
};
