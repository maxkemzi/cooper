import styled from "styled-components";

const ContentStyled = styled.div`
	max-width: 500px;
`;

const IdeaBlockStyled = styled.div`
	margin-bottom: 60px;

	${({theme}) => theme.media.xl} {
		margin-bottom: ${({theme}) => theme.spacing.lg};
	}
`;

const SocialListStyled = styled.ul`
	display: flex;
	align-items: center;
	gap: ${({theme}) => theme.spacing.md};
`;

export {ContentStyled, IdeaBlockStyled, SocialListStyled};
