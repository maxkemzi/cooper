import {commonStyles} from "@shared/theme";
import styled, {css} from "styled-components";

interface StyleProps {
	$isFocused: boolean;
}

const TextareaStyled = styled.div<StyleProps>`
	display: flex;
	flex-direction: column;
	border-radius: ${({theme}) => theme.borderRadiuses.main};
	overflow: hidden;
	border: 1px solid ${({theme}) => theme.colors.textPrimary.main};
	transition: border-color ${({theme}) => theme.transitions.main};

	${({$isFocused, theme}) =>
		$isFocused &&
		css`
			border-color: ${theme.colors.textPrimary.main};
		`}

	${commonStyles}
`;

const InputStyled = styled.textarea`
	resize: none;
	border: none;
	padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.lg};
	font-size: ${({theme}) => theme.fontSizes.md};

	&::placeholder {
		opacity: 1;
		color: ${({theme}) => theme.colors.textSecondary.main};
	}
`;

export {TextareaStyled, InputStyled};
