import styled from "styled-components";
import {ReactComponent as LocationIcon} from "@images/profile/location.svg";
import ScreenSizes from "@utils/constants/screenSizes";

export const StyledProfileInfo = styled.div`
	align-self: end;
`;

export const ProfileInfoUsername = styled.h2`
	font-size: 36px;
	font-weight: 600;
	margin-bottom: 8px;

	@media (max-width: ${ScreenSizes.TabletWidth}px) {
		font-size: 24px;
	}
`;

export const ProfileInfoLocation = styled.p`
	margin-bottom: 8px;
	display: flex;
	align-items: center;
`;

export const ProfileLocationIcon = styled(LocationIcon)`
	margin-right: 8px;
`;
