import styled, {css} from "styled-components";
import {ToastPosition} from "./types";

interface Props {
	$position: ToastPosition;
	$spacing: string;
}

const ToastListStyled = styled.div<Props>`
	position: fixed;
	display: flex;
	max-width: 320px;
	padding: ${({$spacing}) => $spacing};
	flex-direction: column;
	gap: ${({theme}) => theme.spacing.md};
	z-index: 999;

	${({$position}) => {
		switch ($position) {
			case "top-left":
				return css`
					top: 0;
					left: 0;
				`;
			case "top-right":
				return css`
					top: 0;
					right: 0;
				`;
			case "bottom-left":
				return css`
					bottom: 0;
					left: 0;
				`;
			case "bottom-right":
				return css`
					bottom: 0;
					right: 0;
				`;
			default:
				return false;
		}
	}}
`;

export {ToastListStyled};
