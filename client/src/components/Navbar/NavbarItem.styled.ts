import {NavLink} from "react-router-dom";
import styled from "styled-components";

const NavbarLink = styled(NavLink)`
	position: relative;
	padding-bottom: 4px;
	font-size: 16px;
	line-height: 24px;
	transition: color ${({theme}) => theme.transitionBase};
	color: ${({theme}) => theme.colors.dark};
	text-transform: capitalize;

	&:hover {
		color: ${({theme}) => theme.colors.accent};

		&::after {
			width: 100%;
			left: 0;
		}
	}

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		right: 0;
		width: 0;
		height: 1px;
		transition: width ${({theme}) => theme.transitionBase};
		background-color: ${({theme}) => theme.colors.accent};
	}

	&.active {
		color: ${({theme}) => theme.colors.accent};

		&::after {
			width: 100%;
			left: 0;
		}
	}
`;

export default NavbarLink;
