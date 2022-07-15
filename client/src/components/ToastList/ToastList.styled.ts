import {ToastPosition} from "@customTypes/index";
import styled, {css, keyframes} from "styled-components";

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

const StyledToastList = styled.div<{position?: ToastPosition}>`
	position: fixed;
	z-index: 999;

	${({position}) => {
		switch (position) {
			case "top-left":
				return css`
					top: 4px;
					left: 4px;
					animation: ${ToastInLeft} 0.7s;
				`;
			case "bottom-left":
				return css`
					bottom: 4px;
					left: 4px;
					animation: ${ToastInLeft} 0.7s;
				`;
			case "bottom-right":
				return css`
					bottom: 4px;
					right: 4px;
					animation: ${ToastInRight} 0.7s;
				`;
			default:
				return css`
					top: 4px;
					right: 4px;
					animation: ${ToastInRight} 0.7s;
				`;
		}
	}}
`;

export default StyledToastList;
