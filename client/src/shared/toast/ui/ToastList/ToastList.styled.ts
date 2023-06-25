import styled, {css, keyframes} from "styled-components";
import {ToastPosition} from "./types";

const ToastInRight = keyframes`
	from {
		transform: translateX(100%);
	}
	to {
		transform: translateX(0);
	}
`;

const ToastInLeft = keyframes`
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0);
	}
`;

interface Props {
	position: ToastPosition;
}

const ToastListStyled = styled.div<Props>`
	position: fixed;
	display: flex;
	flex-direction: column;
	gap: ${({theme}) => theme.spacing.md};
	z-index: 999;

	${({position}) => {
		switch (position) {
			case "top-left":
				return css`
					top: ${({theme}) => theme.spacing.xs};
					left: ${({theme}) => theme.spacing.xs};
					animation: ${ToastInLeft} 0.7s;
				`;
			case "top-right":
				return css`
					top: ${({theme}) => theme.spacing.xs};
					right: ${({theme}) => theme.spacing.xs};
					animation: ${ToastInRight} 0.7s;
				`;
			case "bottom-left":
				return css`
					bottom: ${({theme}) => theme.spacing.xs};
					left: ${({theme}) => theme.spacing.xs};
					animation: ${ToastInLeft} 0.7s;
				`;
			case "bottom-right":
				return css`
					bottom: ${({theme}) => theme.spacing.xs};
					right: ${({theme}) => theme.spacing.xs};
					animation: ${ToastInRight} 0.7s;
				`;
			default:
				return false;
		}
	}}
`;

export default ToastListStyled;
