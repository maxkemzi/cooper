import ScreenSizes from "@utils/constants/screenSizes";
import styled from "styled-components";

const StyledEditProfileFormAvatar = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 24px;

	@media (max-width: ${ScreenSizes.TabletWidth}px) {
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 16px;
	}
`;

export default StyledEditProfileFormAvatar;
