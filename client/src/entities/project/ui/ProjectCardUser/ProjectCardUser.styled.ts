import {Typography} from "@shared/ui";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const ProjectCardUserStyled = styled(NavLink)`
	display: flex;
	align-items: center;
	flex-shrink: 0;
	gap: ${({theme}) => theme.spacing.md};
`;

const UsernameStyled = styled(Typography).attrs({
	noWrap: true,
	variant: "h6"
})`
	${({theme}) => theme.media.sm} {
		order: 1;
	}
`;

export {ProjectCardUserStyled, UsernameStyled};
