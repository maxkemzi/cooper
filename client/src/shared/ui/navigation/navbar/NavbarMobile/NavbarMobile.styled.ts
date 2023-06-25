import {commonStyles} from "@shared/theme";
import styled, {css} from "styled-components";
import {StyleProps} from "./type";

const NavbarMobileStyled = styled.nav<StyleProps>`
	position: absolute;
	top: 0;
	right: -100%;
	border-bottom-left-radius: ${({theme}) => theme.borderRadiuses.main};
	transition: all ${({theme}) => theme.transitions.main};
	z-index: 999;
	box-shadow: ${({theme}) => theme.boxShadows.main};
	padding: ${({theme}) => theme.spacing.lg};
	background: ${({theme}) => theme.colors.background.main};
	${({$isOpen}) =>
		$isOpen &&
		css`
			right: 0;
		`};

	${commonStyles}
`;

export {NavbarMobileStyled};
