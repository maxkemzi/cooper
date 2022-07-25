import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";

export const StyledAboutMeBox = styled.div`
	width: 50%;
	margin-right: 24px;

	@media (max-width: ${ScreenSizes.SmDesktopWidth}px) {
		width: 100%;
		margin-right: 0;
		margin-bottom: 24px;
	}
`;

export const AboutMeBoxContent = styled.div`
	max-width: 500px;
`;

export const AboutMeIdeaBlock = styled.div`
	margin-bottom: 60px;

	@media (max-width: ${ScreenSizes.SmDesktopWidth}px) {
		margin-bottom: 28px;
	}
`;
