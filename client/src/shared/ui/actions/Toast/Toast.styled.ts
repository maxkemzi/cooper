import {commonStyles} from "@shared/theme";
import styled from "styled-components";
import {Icon} from "../../icons";

const ToastStyled = styled.div`
	display: flex;
	gap: ${({theme}) => theme.spacing.md};
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

const IconStyled = styled(Icon)`
	flex-shrink: 0;
`;

const ButtonStyled = styled.button`
	align-self: flex-start;
`;

export {BodyStyled, ButtonStyled, IconStyled, ToastStyled};
