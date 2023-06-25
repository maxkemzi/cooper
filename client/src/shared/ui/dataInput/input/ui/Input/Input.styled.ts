import {ThemingProps, commonStyles} from "@shared/theme";
import styled from "styled-components";

const InputStyled = styled.input<ThemingProps>`
	width: 100%;
	border: 1px solid ${({theme}) => theme.colors.primary.main};
	border-radius: ${({theme}) => theme.borderRadiuses.main};
	padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.lg};
	transition: border-color ${({theme}) => theme.transitions.main};
	font-size: ${({theme}) => theme.fontSizes.md};
	background: ${({theme}) => theme.colors.background.main};

	&:focus {
		outline: none;
		border-color: ${({theme}) => theme.colors.textPrimary.main};
	}

	&::placeholder {
		opacity: 1;
		color: ${({theme}) => theme.colors.textSecondary.main};
	}

	${commonStyles}
`;

export {InputStyled};
