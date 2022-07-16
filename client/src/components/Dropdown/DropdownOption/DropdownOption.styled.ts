import styled, {css} from "styled-components";

export const DropdownOptionButton = styled.button`
	width: 100%;
	text-align: left;
	color: ${({theme}) => theme.colors.light};
	cursor: pointer;
	font-size: 16px;
	padding: 12px 28px;
	transition: all ${({theme}) => theme.transitionBase};
	background: ${({theme}) => theme.colors.dark};

	&:hover {
		background: ${({theme}) => theme.colors.accentLight};
		color: ${({theme}) => theme.colors.accent};
	}
`;

export const StyledDropdownOption = styled.li<{isActive?: boolean}>`
	${({isActive, theme}) =>
		isActive &&
		css`
			${DropdownOptionButton} {
				background: ${theme.colors.accentLight};
				border-color: ${theme.colors.dark};
				color: ${theme.colors.accent};
				cursor: auto;
			}
		`}

	&:not(:last-child) ${DropdownOptionButton} {
		border-bottom: 1px solid ${({theme}) => theme.colors.accentLight};
	}
`;
