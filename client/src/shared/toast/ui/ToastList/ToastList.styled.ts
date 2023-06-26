import styled, {css} from "styled-components";
import {ToastPosition} from "./types";

interface Props {
	$position: ToastPosition;
	$spacing: string;
}

const ToastListStyled = styled.div<Props>`
	position: fixed;
	display: flex;
	flex-direction: column;
	width: 320px;
	gap: ${({theme}) => theme.spacing.md};
	z-index: 999;

	${({$position, $spacing}) => {
		switch ($position) {
			case "top-left":
				return css`
					top: ${$spacing};
					left: ${$spacing};
				`;
			case "top-right":
				return css`
					top: ${$spacing};
					right: ${$spacing};
				`;
			case "bottom-left":
				return css`
					bottom: ${$spacing};
					left: ${$spacing};
				`;
			case "bottom-right":
				return css`
					bottom: ${$spacing};
					right: ${$spacing};
				`;
			default:
				return false;
		}
	}}
`;

export {ToastListStyled};
