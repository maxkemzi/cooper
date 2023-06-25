import styled, {css} from "styled-components";

interface ButtonProps {
	disabled?: boolean;
}

const ButtonStyled = styled.button<ButtonProps>`
	width: 100%;
	text-align: left;
	color: ${({theme}) => theme.colors.background.main};
	cursor: pointer;
	font-size: ${({theme}) => theme.fontSizes.md};
	padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.lg};
	transition: all ${({theme}) => theme.transitions.main};
	background: ${({theme}) => theme.colors.textPrimary.main};

	${({disabled}) =>
		disabled &&
		css`
			cursor: auto;
		`}
`;

interface DropdownOptionProps {
	$isActive?: boolean;
}

const DropdownOptionStyled = styled.li<DropdownOptionProps>`
	${({$isActive, theme}) =>
		$isActive &&
		css`
			${ButtonStyled} {
				border-color: ${theme.colors.textPrimary.main};
				color: ${theme.colors.disabled.main};
			}
		`}

	&:not(:last-child) ${ButtonStyled} {
		border-bottom: 1px solid ${({theme}) => theme.colors.disabled.main};
	}
`;

export {ButtonStyled, DropdownOptionStyled};
