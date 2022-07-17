import styled from "styled-components";
import {ReactComponent as LocationIcon} from "@images/profile/location.svg";

export const ProfileInfoUsername = styled.h2`
	font-size: 36px;
	font-weight: 600;
	margin-bottom: 8px;
`;

export const ProfileInfoLocation = styled.p`
	margin-bottom: 8px;
	display: flex;
	align-items: center;
`;

export const ProfileLocationIcon = styled(LocationIcon)`
	margin-right: 8px;
`;
