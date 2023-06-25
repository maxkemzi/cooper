import styled from "styled-components";

const FlexContainerStyled = styled.div`
	display: flex;
	align-items: center;
	gap: ${({theme}) => theme.spacing.md};
	margin-bottom: ${({theme}) => theme.spacing.lg};

	${({theme}) => theme.media.md} {
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: ${({theme}) => theme.spacing.md};
	}
`;

const ButtonsStyled = styled.div`
	display: flex;
	gap: ${({theme}) => theme.spacing.sm};
`;

export {ButtonsStyled, FlexContainerStyled};
