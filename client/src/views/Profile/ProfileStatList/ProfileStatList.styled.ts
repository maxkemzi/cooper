import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";

const StyledProfileStatList = styled.aside`
	@media (max-width: ${ScreenSizes.TabletWidth}px) {
		display: flex;
		overflow: auto;

		& > div:not(:last-child) {
			margin-right: 12px;
		}
	}
`;

export default StyledProfileStatList;
