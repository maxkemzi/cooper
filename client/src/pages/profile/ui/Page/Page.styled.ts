import {Icon} from "@shared/ui";
import styled from "styled-components";

const AvatarContentStyled = styled.div`
	grid-area: avatar;
	max-width: 100%;
`;

const StatisticsContentStyled = styled.div`
	grid-area: statistics;
	max-width: 100%;
`;

const InfoContentStyled = styled.div`
	grid-area: info;
	max-width: 100%;
	align-self: end;
`;

const ProjectsContentStyled = styled.div`
	grid-area: projects;
	max-width: 100%;
`;

const GridContainerStyled = styled.div`
	display: grid;
	grid-template-areas: "avatar info" "statistics projects";
	grid-template-columns: ${({theme}) => theme.avatarSizes.lg} 1fr;
	grid-gap: ${({theme}) => theme.spacing.lg};

	${({theme}) => theme.media.md} {
		grid-template-areas: "avatar" "info" "statistics" "projects";
		grid-template-columns: 1fr;
	}
`;

const LocationStyled = styled.div`
	margin-bottom: ${({theme}) => theme.spacing.sm};
	display: flex;
	align-items: center;
	gap: ${({theme}) => theme.spacing.xs};
`;

const LocationIconStyled = styled(Icon)`
	flex-shrink: 0;
`;

export {
	GridContainerStyled,
	LocationStyled,
	AvatarContentStyled,
	InfoContentStyled,
	ProjectsContentStyled,
	StatisticsContentStyled,
	LocationIconStyled
};
