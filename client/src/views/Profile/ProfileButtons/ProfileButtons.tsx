import Button from "@components/Button/Button";
import React, {FC} from "react";
import StyledProfileButtons from "./ProfileButtons.styled";

interface ProfileButtonsProps {
	belongsToAuthUser: boolean;
}

const ProfileButtons: FC<ProfileButtonsProps> = ({belongsToAuthUser}) => (
	<StyledProfileButtons>
		<Button marginRight="20px">Chat</Button>
		{!belongsToAuthUser && <Button variant="outline">Follow</Button>}
	</StyledProfileButtons>
);

export default ProfileButtons;
