import {commonStyles} from "@shared/theme";
import styled from "styled-components";

const RadioStyled = styled.label`
	display: flex;
	align-items: center;
	cursor: pointer;
	font-size: ${({theme}) => theme.fontSizes.md};

	& + & {
		margin-left: ${({theme}) => theme.spacing.lg};
	}

	${commonStyles}
`;

const InputStyled = styled.input`
	display: none;

	&:checked + span::before {
		transform: translate(-50%, -50%) scale(1);
	}
`;

const FakeStyled = styled.span`
	position: relative;
	display: inline-block;
	width: 24px;
	height: 24px;
	border: 1px solid ${({theme}) => theme.colors.secondary.main};
	border-radius: 50%;
	margin-right: ${({theme}) => theme.spacing.md};

	&::before {
		content: "";
		position: absolute;
		display: block;
		width: 16px;
		height: 16px;
		background: ${({theme}) => theme.colors.secondary.main};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0);
		border-radius: 50%;
		transition: transform ${({theme}) => theme.transitions.main};
	}
`;

export {FakeStyled, InputStyled, RadioStyled};
