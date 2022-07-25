import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";

const AboutMePageInner = styled.div`
	display: flex;
	width: 100%;

	@media (max-width: ${ScreenSizes.SmDesktopWidth}px) {
		flex-direction: column;
	}
`;

export default AboutMePageInner;
