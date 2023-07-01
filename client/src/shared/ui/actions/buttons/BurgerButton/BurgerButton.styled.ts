import {commonStyles} from "@shared/theme";
import styled from "styled-components";

const BurgerButtonStyled = styled.button`
	position: relative;
	width: ${({theme}) => theme.iconSizes.lg};
	height: ${({theme}) => theme.iconSizes.md};

	span {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		background: ${({theme}) => theme.colors.textPrimary.main};
		height: 3px;
	}

	&::after,
	&::before {
		content: "";
		position: absolute;
		left: 0;
		width: 100%;
		background: ${({theme}) => theme.colors.textPrimary.main};
		height: 3px;
	}

	&::after {
		bottom: 0;
	}

	&::before {
		top: 0;
	}

	${commonStyles}
`;

export {BurgerButtonStyled};
