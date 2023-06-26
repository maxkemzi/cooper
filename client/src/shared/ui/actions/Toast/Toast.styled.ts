import {commonStyles} from "@shared/theme";
import styled from "styled-components";

const ToastStyled = styled.div`
	display: flex;
	min-height: 58px;
	max-height: 800px;
	gap: ${({theme}) => theme.spacing.sm};
	padding: ${({theme}) => theme.spacing.md};
	transition: background ${({theme}) => theme.transitions.main};
	background: ${({theme}) => theme.colors.background.main};
	border-radius: ${({theme}) => theme.borderRadiuses.main};
	box-shadow: ${({theme}) => theme.boxShadows.main};
	cursor: pointer;

	${commonStyles}
`;

const BodyStyled = styled.div`
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	gap: ${({theme}) => theme.spacing.sm};
`;

const IconWrapperStyled = styled.div`
	display: flex;
	flex-shrink: 0;
`;

const ButtonStyled = styled.button`
	align-self: flex-start;
`;

export {BodyStyled, ButtonStyled, IconWrapperStyled, ToastStyled};
