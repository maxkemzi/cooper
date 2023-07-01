import {RouteName} from "@shared/constants";
import {Avatar} from "@shared/ui";
import {FC} from "react";
import {ProjectCardUserStyled, UsernameStyled} from "./ProjectCardUser.styled";

interface Props {
	username: string;
	avatar: string | null;
}

const ProjectCardUser: FC<Props> = ({username, avatar}) => (
	<ProjectCardUserStyled to={`${RouteName.PROFILE}/${username}`}>
		<UsernameStyled>{username}</UsernameStyled>
		<Avatar imagePath={avatar} />
	</ProjectCardUserStyled>
);

export default ProjectCardUser;
