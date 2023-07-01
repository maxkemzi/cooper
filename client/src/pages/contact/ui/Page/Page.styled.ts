import styled from "styled-components";

const IdeaContentStyled = styled.div`
	grid-area: idea;
	max-width: 500px;
`;

const SocialContentStyled = styled.div`
	grid-area: social;
	max-width: 100%;
`;

const ContactContentStyled = styled.div`
	grid-area: contact;
	max-width: 100%;
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-areas: "idea contact" "social contact";
	grid-gap: ${({theme}) => theme.spacing.lg};

	${({theme}) => theme.media.lg} {
		grid-template-columns: 1fr;
		grid-template-areas: "idea" "contact" "social";
	}
`;

export {
	GridContainer,
	SocialContentStyled,
	IdeaContentStyled,
	ContactContentStyled
};
