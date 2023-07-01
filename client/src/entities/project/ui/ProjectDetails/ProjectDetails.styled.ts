import styled from "styled-components";

const ProjectDetailsStyled = styled.div`
	padding: 0 ${({theme}) => theme.spacing.lg};
`;

const SectionStyled = styled.div`
	padding: ${({theme}) => theme.spacing.lg} 0;

	&:not(:last-child) {
		border-bottom: 1px solid ${({theme}) => theme.colors.surface.main};
	}
`;

const FlexContainerStyled = styled.div`
	display: flex;
	align-items: center;
	gap: ${({theme}) => theme.spacing.sm};
	margin-bottom: ${({theme}) => theme.spacing.lg};

	${({theme}) => theme.media.md} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export {FlexContainerStyled, ProjectDetailsStyled, SectionStyled};
