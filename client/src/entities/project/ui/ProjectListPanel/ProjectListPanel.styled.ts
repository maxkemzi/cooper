import styled from "styled-components";

const ProjectListPanelStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: ${({theme}) => theme.spacing.md};

	${({theme}) => theme.media.md} {
		flex-wrap: wrap;

		& > div:nth-child(2) {
			width: 100%;
		}
	}

	${({theme}) => theme.media.sm} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const FlexContainerStyled = styled.div`
	display: flex;
	align-items: center;
	gap: ${({theme}) => theme.spacing.md};

	${({theme}) => theme.media.md} {
		justify-content: space-between;
		width: 100%;
	}

	${({theme}) => theme.media.sm} {
		flex-direction: column;
		align-items: flex-start;

		& > div:nth-child(2) {
			width: 100%;
		}
	}
`;

const TotalCount = styled.div`
	width: 152px;

	${({theme}) => theme.media.xl} {
		width: 105px;
	}

	${({theme}) => theme.media.sm} {
		align-self: flex-start;
	}
`;

export {FlexContainerStyled, ProjectListPanelStyled, TotalCount};
