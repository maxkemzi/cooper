import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";

const ProfilePageGrid = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr;
	grid-gap: 20px;

	@media (max-width: ${ScreenSizes.TabletWidth}px) {
		grid-gap: 12px;
		grid-template-columns: 1fr;
	}
`;

export default ProfilePageGrid;
