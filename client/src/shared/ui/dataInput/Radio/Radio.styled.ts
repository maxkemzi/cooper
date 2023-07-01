import {commonStyles} from "@shared/theme";
import styled from "styled-components";

const RadioStyled = styled.label`
	display: flex;
	align-items: center;
	cursor: pointer;
	gap: ${({theme}) => theme.spacing.md};

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
	width: ${({theme}) => theme.iconSizes.md};
	height: ${({theme}) => theme.iconSizes.md};
	border: 1px solid ${({theme}) => theme.colors.secondary.main};
	border-radius: 50%;

	&::before {
		content: "";
		position: absolute;
		display: block;
		width: ${({theme}) => theme.iconSizes.xs};
		height: ${({theme}) => theme.iconSizes.xs};
		background: ${({theme}) => theme.colors.secondary.main};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0);
		border-radius: 50%;
		transition: transform ${({theme}) => theme.transitions.main};
	}
`;

export {FakeStyled, InputStyled, RadioStyled};
