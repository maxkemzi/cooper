import styled from "styled-components";

const CenterContentStyled = styled.div`
	grid-area: center;
	max-width: 100%;
`;

const RightContentStyled = styled.div`
	grid-area: right;
	max-width: 100%;
	width: 100%;
`;

const LeftContentStyled = styled.div`
	grid-area: left;
	max-width: 100%;
	width: 100%;
`;

const ProjectListPanelStyled = styled.div`
	display: grid;
	justify-items: start;
	align-items: center;
	grid-template-areas: "left center right";
	grid-template-columns: minmax(auto, 150px) minmax(auto, 1fr) minmax(
			auto,
			200px
		);
	grid-gap: ${({theme}) => theme.spacing.md};

	${({theme}) => theme.media.md} {
		grid-template-columns: minmax(auto, 1fr) minmax(auto, 200px);
		grid-template-areas: "left left" "center right";
	}

	${({theme}) => theme.media.sm} {
		grid-template-columns: minmax(auto, 200px) 1fr;
		grid-template-areas: "left left" "center ." "right .";
		justify-items: start;
	}
`;

const FlexContainerStyled = styled.div`
	display: flex;
	align-items: center;
	gap: ${({theme}) => theme.spacing.lg};

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

export {
	FlexContainerStyled,
	ProjectListPanelStyled,
	LeftContentStyled,
	CenterContentStyled,
	RightContentStyled
};
