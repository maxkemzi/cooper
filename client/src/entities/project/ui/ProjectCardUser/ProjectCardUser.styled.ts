import {Avatar} from "@shared/ui";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const ProjectCardUserStyled = styled(NavLink)`
	display: flex;
	align-items: center;
	column-gap: ${({theme}) => theme.spacing.sm};

	${({theme}) => theme.media.sm} {
		width: 100%;
	}
`;

const AvatarStyled = styled(Avatar)`
	${({theme}) => theme.media.sm} {
		margin-right: ${({theme}) => theme.spacing.xs};
	}
`;

const UsernameStyled = styled.p`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-weight: 600;

	${({theme}) => theme.media.sm} {
		order: 1;
	}
`;

export {AvatarStyled, ProjectCardUserStyled, UsernameStyled};
