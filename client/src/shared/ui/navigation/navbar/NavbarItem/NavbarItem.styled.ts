import {commonStyles} from "@shared/theme";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const NavbarItemStyled = styled.li`
	${commonStyles}
`;

const LinkStyled = styled(NavLink)`
	position: relative;
	padding-bottom: ${({theme}) => theme.spacing.xs};
	font-size: ${({theme}) => theme.fontSizes.md};
	transition: color ${({theme}) => theme.transitions.main};
	color: ${({theme}) => theme.colors.textPrimary.main};
	text-transform: capitalize;

	&:hover {
		color: ${({theme}) => theme.colors.secondary.main};

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
		transition: width ${({theme}) => theme.transitions.main};
		background-color: ${({theme}) => theme.colors.secondary.main};
	}

	&.active {
		pointer-events: none;
		color: ${({theme}) => theme.colors.secondary.main};

		&::after {
			width: 100%;
			left: 0;
		}
	}
`;

export {LinkStyled, NavbarItemStyled};
