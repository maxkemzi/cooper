import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";
import Avatar from "@components/Avatar/Avatar";

interface HeaderProps {
	isAbsolute?: boolean;
}

export const StyledHeader = styled.header<HeaderProps>`
	position: relative;
	padding-bottom: 44px;
	padding-top: 44px;
	z-index: 999;

	${({isAbsolute}) =>
		isAbsolute &&
		css`
			position: absolute;
			padding-bottom: 0;
			left: 0;
			right: 0;
			top: 0;
		`}
`;

export const HeaderFlex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledHeaderUserInfo = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	min-width: 152px;
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

	svg::before,
	svg::after {
		transition: background ${({theme}) => theme.transitionDuration}
			${({theme}) => theme.transitionTimingFunction};
	}

	&:hover svg::before,
	&:hover svg::after {
		background: #0d19a3;
	}
`;

export const HeaderMenuTitle = styled.p`
	text-overflow: ellipsis;
	overflow: hidden;
`;

export const StyledHeaderLogOutBtn = styled.button`
	transition: color var(--transition-base);
	color: var(--color-base);

	&:hover {
		color: var(--color-primary-light);
	}
`;

export const HeaderAvatar = styled(Avatar)`
	margin-right: 4px;
`;

export const StyledHeaderMenuBtn = styled.button`
	display: flex;
	align-items: center;
`;
