import styled from "styled-components";

const FlexContainerStyled = styled.div`
	display: flex;
	align-items: center;
	gap: ${({theme}) => theme.spacing.md};
	margin-bottom: ${({theme}) => theme.spacing.lg};

	${({theme}) => theme.media.sm} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export {FlexContainerStyled};
