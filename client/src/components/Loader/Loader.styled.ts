import styled, {keyframes} from "styled-components";

export const StyledLoader = styled.div`
	position: absolute;
	border-radius: ${({theme}) => theme.borderRadiusSmaller};
	top: 50%;
	left: 50%;
	width: 142px;
	height: 40px;
	margin: -20px 0 0 -87px;
	background: ${({theme}) => theme.colors.light};
	filter: contrast(20);
`;

const dotAnimation = keyframes`
	50% {
		transform: translateX(64px);
	}
`;

export const Dot = styled.span`
	position: absolute;
	width: 16px;
	height: 16px;
	top: 12px;
	left: 31px;
	filter: blur(4px);
	background: ${({theme}) => theme.colors.dark};
	border-radius: 50%;
	transform: translateX(0);
	animation: ${dotAnimation} 2.8s infinite;
`;

const dotsAnimation = keyframes`
	50% {
		transform: translateX(-31px);
	}
`;

export const Dots = styled.div`
	transform: translateX(0);
	margin-top: 12px;
	margin-left: 47px;
	animation: ${dotsAnimation} 2.8s infinite;

	span {
		display: block;
		float: left;
		width: 16px;
		height: 16px;
		margin-left: 16px;
		filter: blur(4px);
		background: ${({theme}) => theme.colors.dark};
		border-radius: 50%;
	}
`;
