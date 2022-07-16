import React, {FC} from "react";
import {ReactComponent as LocationIcon} from "@images/profile/location.svg";
import {ProfileInfoLocation, ProfileInfoUsername} from "./ProfileInfo.styled";

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
			<LocationIcon />
			{location}
		</ProfileInfoLocation>
		<p>{description}</p>
	</div>
);

export default ProfileInfo;
