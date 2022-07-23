import styled, {css} from "styled-components";

const StyledNavbarMobile = styled.nav<{isOpen: boolean}>`
	position: absolute;
	top: 0;
	right: -100%;
	border-bottom-left-radius: ${({theme}) => theme.borderRadiusSmaller};
	transition: all ${({theme}) => theme.transitionBase};
	z-index: 999;
	box-shadow: ${({theme}) => theme.boxShadowBase};
	padding: 28px;
	background: ${({theme}) => theme.colors.light};
	${({isOpen}) =>
		isOpen &&
		css`
			right: 0;
		`};
`;

export default StyledNavbarMobile;
