import styled from "styled-components";

export const RadioButtonLabel = styled.label`
	display: flex;
	align-items: center;
	cursor: pointer;
	font-size: 16px;

	& + & {
		margin-left: 20px;
	}
`;

export const RadioButtonInput = styled.input`
	display: none;

	&:checked + span::before {
		transform: translate(-50%, -50%) scale(1);
	}
`;

export const RadioButtonFake = styled.span`
	position: relative;
	display: inline-block;
	width: 24px;
	height: 24px;
	border: 1px solid ${({theme}) => theme.colors.accent};
	border-radius: 50%;
	margin-right: 12px;

	&::before {
		content: "";
		position: absolute;
		display: block;
		width: 16px;
		height: 16px;
		background: ${({theme}) => theme.colors.accent};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0);
		border-radius: 50%;
		transition: transform ${({theme}) => theme.transitionBase};
	}
`;
