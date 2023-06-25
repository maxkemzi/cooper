import {ColorManipulator, commonStyles} from "@shared/theme";
import styled from "styled-components";
import {StyleProps} from "./types";

const ToastStyled = styled.div<StyleProps>`
	position: relative;
	display: flex;
	align-items: center;
	gap: ${({theme}) => theme.spacing.sm};
	padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.lg};
	width: 300px;
	height: 48px;
	transition: background ${({theme}) => theme.transitions.main};
	background: ${({$color, theme}) =>
		ColorManipulator.toRgbaString(theme.colors[$color].main, 0.2)};
	border: 1px solid ${({$color, theme}) => theme.colors[$color].main};
	border-radius: ${({theme}) => theme.borderRadiuses.main};
	cursor: pointer;

	${commonStyles}
`;

const ButtonStyled = styled.button`
	display: flex;
	align-items: center;
	margin-left: auto;
`;

export {ButtonStyled, ToastStyled};
