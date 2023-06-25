import {commonStyles} from "@shared/theme";
import styled from "styled-components";

const ModalStyled = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 0 ${({theme}) => theme.spacing.xs};
	background: rgba(0, 0, 0, 0.3);
	z-index: 999;
	transition: all ${({theme}) => theme.transitions.main};
	display: flex;
	align-items: center;
	justify-content: center;

	${commonStyles}
`;

const ContentStyled = styled.div<{width?: string; maxWidth?: string}>`
	width: ${({width}) => width};
	max-width: ${({maxWidth}) => maxWidth};
	background: ${({theme}) => theme.colors.background.main};
	border-radius: ${({theme}) => theme.borderRadiuses.main};
	transition: all ${({theme}) => theme.transitions.main};
	box-shadow: ${({theme}) => theme.boxShadows.main};
`;

const HeaderStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.lg};
	border-bottom: 1px solid ${({theme}) => theme.colors.surface.main};
`;

const BodyStyled = styled.div`
	padding: ${({theme}) => theme.spacing.md} ${({theme}) => theme.spacing.lg};
`;

const CloseButtonStyled = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ButtonsStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: ${({theme}) => theme.spacing.md};
	margin-top: ${({theme}) => theme.spacing.md};
`;

export {
	BodyStyled,
	ButtonsStyled,
	CloseButtonStyled,
	ContentStyled,
	HeaderStyled,
	ModalStyled
};
