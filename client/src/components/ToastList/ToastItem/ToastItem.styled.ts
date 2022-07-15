import {ToastPosition} from "@customTypes/index";
import CrossIcon from "@icons/CrossIcon/CrossIcon";
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

export const StyledToastItem = styled.div<{position?: ToastPosition}>`
	position: relative;
	display: flex;
	align-items: center;
	padding: 12px 20px;
	width: 300px;
	height: 48px;
	transition: opacity ${({theme}) => theme.transitionBase};
	background: ${({theme}) => theme.colors.dark};
	color: ${({theme}) => theme.colors.light};
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
	opacity: 0.9;
	cursor: pointer;

	&:not(:last-child) {
		margin-bottom: 12px;
	}

	&:hover {
		opacity: 1;
	}

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

export const ToastItemIcon = styled.img`
	margin-right: 8px;
`;

export const ToastItemText = styled.p`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-right: 20px;
`;

export const ToastItemButton = styled.button`
	display: flex;
	align-items: center;
	margin-left: auto;
`;

export const ToastItemCrossIcon = styled(CrossIcon)`
	.icon::before,
	.icon::after {
		background: #fff;
	}
`;
