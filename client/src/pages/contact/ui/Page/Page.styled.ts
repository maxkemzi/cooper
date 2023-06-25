import styled from "styled-components";

const Content = styled.div`
	display: flex;
	width: 100%;

	${({theme}) => theme.media.xl} {
		flex-direction: column;
	}
`;

const Section = styled.div`
	width: 50%;
	gap: ${({theme}) => theme.spacing.lg};

	${({theme}) => theme.media.xl} {
		width: 100%;
	}
`;

// eslint-disable-next-line import/prefer-default-export
export {Content, Section};
