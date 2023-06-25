import styled from "styled-components";

const GridContainerStyled = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr;
	grid-gap: ${({theme}) => theme.spacing.lg};

	${({theme}) => theme.media.md} {
		grid-gap: ${({theme}) => theme.spacing.md};
		grid-template-columns: 1fr;
	}
`;

const InfoStyled = styled.div`
	align-self: end;
`;

const LocationStyled = styled.div`
	margin-bottom: ${({theme}) => theme.spacing.sm};
	display: flex;
	align-items: center;
	gap: ${({theme}) => theme.spacing.xs};
`;

const StatisticsListStyled = styled.aside`
	${({theme}) => theme.media.md} {
		display: flex;
		overflow: auto;

		& > div:not(:last-child) {
			margin-right: ${({theme}) => theme.spacing.md};
		}
	}
`;

export {GridContainerStyled, InfoStyled, LocationStyled, StatisticsListStyled};
