import {Typography} from "@shared/ui";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const ProjectCardStyled = styled.div`
	display: flex;
	flex-direction: column;
	background: ${({theme}) => theme.colors.background.main};
	border-radius: ${({theme}) => theme.borderRadiuses.main};
	transition: box-shadow ${({theme}) => theme.transitions.main};
	overflow: hidden;

	&:hover {
		box-shadow: ${({theme}) => theme.boxShadows.main};
	}
`;

const ContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${({theme}) => theme.spacing.lg};
	height: 100%;

	${({theme}) => theme.media.sm} {
		padding: ${({theme}) => theme.spacing.md};
	}
`;

const DescriptionStyled = styled.p`
	flex-grow: 1;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	word-wrap: break-word;
	line-height: 1.5;
	margin-bottom: ${({theme}) => theme.spacing.md};

	${({theme}) => theme.media.sm} {
		margin-bottom: ${({theme}) => theme.spacing.sm};
	}
`;

const HeaderStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: ${({theme}) => theme.spacing.md};
	margin-bottom: ${({theme}) => theme.spacing.md};
	overflow: hidden;

	${({theme}) => theme.media.sm} {
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: ${({theme}) => theme.spacing.xs};
	}
`;

const TypographyStyled = styled(Typography)`
	transition: color ${({theme}) => theme.transitions.main};
`;

const TitleLinkStyled = styled(NavLink)`
	overflow: hidden;
	display: block;
	flex-grow: 1;

	&:hover ${TypographyStyled} {
		color: ${({theme}) => theme.colors.secondary.main};
	}

	${({theme}) => theme.media.sm} {
		margin-bottom: ${({theme}) => theme.spacing.xs};
	}
`;

const BodyStyled = styled.div`
	flex: 1 0 auto;
`;

const FooterStyled = styled.div`
	display: flex;
	align-items: center;
	gap: ${({theme}) => theme.spacing.md};
	justify-content: space-between;
	flex-shrink: 0;

	${({theme}) => theme.media.sm} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const DateStyled = styled.p`
	font-size: ${({theme}) => theme.fontSizes.md};
	align-self: flex-end;

	${({theme}) => theme.media.sm} {
		align-self: flex-start;
	}
`;

const ActionsStyled = styled.div`
	display: flex;
	align-items: center;
	gap: ${({theme}) => theme.spacing.sm};
`;

export {
	BodyStyled,
	ActionsStyled,
	ContentStyled,
	DateStyled,
	DescriptionStyled,
	FooterStyled,
	HeaderStyled,
	ProjectCardStyled,
	TitleLinkStyled,
	TypographyStyled
};
