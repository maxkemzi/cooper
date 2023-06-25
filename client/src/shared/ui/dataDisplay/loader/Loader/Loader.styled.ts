import styled, {keyframes} from "styled-components";

const LoaderStyled = styled.div`
	position: absolute;
	border-radius: ${({theme}) => theme.borderRadiuses.main};
	top: 50%;
	left: 50%;
	width: 142px;
	height: 40px;
	margin: -20px 0 0 -87px;
	background: ${({theme}) => theme.colors.background.main};
	filter: contrast(20);
`;

const dotAnimation = keyframes`
	50% {
		transform: translateX(64px);
	}
`;

const DotStyled = styled.span`
	position: absolute;
	width: 16px;
	height: 16px;
	top: ${({theme}) => theme.spacing.md};
	left: 31px;
	filter: blur(4px);
	background: ${({theme}) => theme.colors.textPrimary.main};
	border-radius: 50%;
	transform: translateX(0);
	animation: ${dotAnimation} 2.8s infinite;
`;

const dotsAnimation = keyframes`
	50% {
		transform: translateX(-31px);
	}
`;

const DotsStyled = styled.div`
	transform: translateX(0);
	margin-top: ${({theme}) => theme.spacing.md};
	margin-left: 47px;
	animation: ${dotsAnimation} 2.8s infinite;

	span {
		display: block;
		float: left;
		width: 16px;
		height: 16px;
		margin-left: ${({theme}) => theme.spacing.md};
		filter: blur(4px);
		background: ${({theme}) => theme.colors.textPrimary.main};
		border-radius: 50%;
	}
`;

export {DotStyled, DotsStyled, LoaderStyled};
