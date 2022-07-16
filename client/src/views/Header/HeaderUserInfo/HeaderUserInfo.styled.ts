import {NavLink} from "react-router-dom";
import styled from "styled-components";

export const StyledHeaderUserInfo = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	justify-content: flex-end;
`;

export const HeaderCreateLink = styled(NavLink)`
	display: flex;
	position: relative;
	margin-right: 12px;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		margin: -10px;
	}

	i::before,
	i::after {
		transition: background ${({theme}) => theme.transitionBase};
	}

	&:hover i::before,
	&:hover i::after {
		background: ${({theme}) => theme.colors.accent};
	}
`;
