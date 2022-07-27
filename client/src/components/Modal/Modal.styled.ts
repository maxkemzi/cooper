import styled, {css} from "styled-components";

export const StyledModal = styled.div<{isOpen: boolean}>`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 0;
	padding: 0 8px;
	visibility: hidden;
	background: rgba(0, 0, 0, 0.3);
	z-index: 999;
	transition: all ${({theme}) => theme.transitionBase};
	display: flex;
	align-items: center;
	justify-content: center;

	${({isOpen}) =>
		isOpen &&
		css`
			opacity: 1;
			visibility: visible;
		`}
`;

export const ModalContent = styled.div<{width?: string; maxWidth?: string}>`
	width: ${({width}) => width};
	max-width: ${({maxWidth}) => maxWidth};
	background: ${({theme}) => theme.colors.light};
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
	transition: all ${({theme}) => theme.transitionBase};
	box-shadow: ${({theme}) => theme.boxShadowBase};
`;

export const ModalHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px 24px;
	border-bottom: 1px solid ${({theme}) => theme.colors.darkLighter};
`;

export const ModalBody = styled.div`
	padding: 16px 24px;
`;
