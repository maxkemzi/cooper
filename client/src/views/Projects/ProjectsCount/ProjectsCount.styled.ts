import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";

const StyledProjectsCount = styled.p`
	white-space: nowrap;
	align-self: center;
	text-overflow: ellipsis;
	overflow: hidden;
	width: 152px;
	margin-right: 16px;

	@media (max-width: ${ScreenSizes.SmDesktopWidth}px) {
		width: 105px;
	}

	@media (max-width: ${ScreenSizes.PhoneWidth}px) {
		margin-right: 0;
		align-self: flex-start;
		margin-bottom: 12px;
	}
`;

export default StyledProjectsCount;
