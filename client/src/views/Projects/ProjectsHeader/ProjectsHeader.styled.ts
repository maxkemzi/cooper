import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";

export const StyledProjectsHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 28px;

	@media (max-width: ${ScreenSizes.TabletWidth}px) {
		flex-wrap: wrap;

		& > div:nth-child(2) {
			width: 100%;
		}
	}

	@media (max-width: ${ScreenSizes.PhoneWidth}px) {
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 20px;
	}
`;

export const ProjectsHeaderFlex = styled.div`
	display: flex;
	align-items: center;
	margin-right: 16px;

	@media (max-width: ${ScreenSizes.TabletWidth}px) {
		justify-content: space-between;
		width: 100%;
		margin-right: 0;
		margin-bottom: 12px;
	}

	@media (max-width: ${ScreenSizes.PhoneWidth}px) {
		flex-direction: column;
		align-items: flex-start;

		& > div:nth-child(2) {
			width: 100%;
		}
	}
`;
