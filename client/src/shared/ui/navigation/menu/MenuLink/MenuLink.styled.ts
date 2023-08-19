import {NavLink} from "react-router-dom";
import styled from "styled-components";

const MenuLinkStyled = styled(NavLink)`
	color: ${({theme}) => theme.colors.background.main};
	transition: color ${({theme}) => theme.transitions.main};

	&:hover {
		color: ${({theme}) => theme.colors.secondaryLight.main};
	}

	&.active {
		color: ${({theme}) => theme.colors.secondaryLight.main};
	}
`;

export {MenuLinkStyled};
