import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";

export const StyledProjectList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
	gap: 16px;

	@media (max-width: ${ScreenSizes.SmDesktopWidth}px) {
		grid-template-columns: 1fr;
	}
`;

export const ProjectListLoadMore = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	text-align: center;
`;

export const ProjectListLoadMoreWrapper = styled.div`
	height: 20px;
`;
