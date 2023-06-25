import {Avatar, Icon} from "@shared/ui";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const UserInfoStyled = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	justify-content: flex-end;
`;

const IconStyled = styled(Icon)`
	transition: color ${({theme}) => theme.transitions.main};
`;

const LinkStyled = styled(NavLink)`
	display: flex;
	position: relative;
	margin-right: ${({theme}) => theme.spacing.md};

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		margin: -${({theme}) => theme.spacing.md};
	}

	&:hover ${IconStyled} {
		color: ${({theme}) => theme.colors.secondary.main} !important;
	}
`;

const ButtonStyled = styled.button`
	display: flex;
	align-items: center;
`;

const AvatarStyled = styled(Avatar)`
	margin-right: ${({theme}) => theme.spacing.xs};
`;

export {AvatarStyled, ButtonStyled, IconStyled, LinkStyled, UserInfoStyled};
