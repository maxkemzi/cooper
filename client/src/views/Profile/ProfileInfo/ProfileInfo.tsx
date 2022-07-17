import React, {FC} from "react";
import FallbackMsgs from "@utils/constants/fallbackMsgs";
import {
	ProfileInfoLocation,
	ProfileInfoUsername,
	ProfileLocationIcon
} from "./ProfileInfo.styled";

interface ProfileInfoProps {
	username: string;
	description: string;
	location: string;
}

const ProfileInfo: FC<ProfileInfoProps> = ({
	description,
	location,
	username
}) => (
	<div>
		<ProfileInfoUsername>{username}</ProfileInfoUsername>
		<ProfileInfoLocation>
			<ProfileLocationIcon />
			{location || FallbackMsgs.ProfileLocation}
		</ProfileInfoLocation>
		<p>{description || FallbackMsgs.ProfileDesc}</p>
	</div>
);

export default ProfileInfo;
