import {MarginProps} from "@customTypes/styled";
import styled from "styled-components";

const StyledBurgerButton = styled.button<MarginProps>`
	margin-bottom: ${({marginBottom}) => marginBottom};
	margin-top: ${({marginTop}) => marginTop};
	margin-left: ${({marginLeft}) => marginLeft};
	margin-right: ${({marginRight}) => marginRight};
	position: relative;
	width: 32px;
	height: 24px;

	span {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		background: ${({theme}) => theme.colors.dark};
		height: 3px;
	}

	&::after,
	&::before {
		content: "";
		position: absolute;
		left: 0;
		width: 100%;
		background: ${({theme}) => theme.colors.dark};
		height: 3px;
	}

	&::after {
		bottom: 0;
	}

	&::before {
		top: 0;
	}
`;

export default StyledBurgerButton;
