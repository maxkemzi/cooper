import styled from "styled-components";

const CrossIcon = styled.i`
	display: inline-block;
	position: relative;
	width: 15px;
	height: 15px;

	&::before,
	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		height: 100%;
		width: 1px;
		background-color: ${({theme}) => theme.colors.dark};
		border-radius: ${({theme}) => theme.borderRadius};
	}

	&::before {
		transform: rotate(45deg);
	}

	&::after {
		transform: rotate(-45deg);
	}
`;

export default CrossIcon;
