import {NavLink} from "react-router-dom";
import styled from "styled-components";

const MenuLink = styled(NavLink)`
	padding: 4px 0;
	color: ${({theme}) => theme.colors.light};
	transition: color ${({theme}) => theme.transitionBase};

	&:hover {
		color: ${({theme}) => theme.colors.accentLight};
	}

	&.active {
		color: ${({theme}) => theme.colors.accentLight};
	}
`;

export default MenuLink;
