import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";

export const ProjectPageSection = styled.div`
	padding: 28px 0;

	&:not(:last-child) {
		border-bottom: 1px solid ${({theme}) => theme.colors.darkLight};
	}

	@media (max-width: ${ScreenSizes.TabletWidth}px) {
		padding: 16px 0;
	}
`;

export const ProjectPageInner = styled.div`
	padding: 0 28px;

	@media (max-width: ${ScreenSizes.TabletWidth}px) {
		padding: 0 16px;
	}
`;

export const ProjectPageBlock = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 24px;

	@media (max-width: ${ScreenSizes.TabletWidth}px) {
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 12px;
	}
`;

export const ProjectsPageDate = styled.p`
	font-size: 16px;
`;
