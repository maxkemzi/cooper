import {commonStyles} from "@shared/theme";
import styled from "styled-components";

const MenuButtonStyled = styled.button`
	color: ${({theme}) => theme.colors.background.main};
	transition: color ${({theme}) => theme.transitions.main};

	&:hover {
		color: ${({theme}) => theme.colors.secondaryLight.main};
	}

	&.active {
		color: ${({theme}) => theme.colors.secondaryLight.main};
	}

	${commonStyles}
`;

// eslint-disable-next-line import/prefer-default-export
export {MenuButtonStyled};
