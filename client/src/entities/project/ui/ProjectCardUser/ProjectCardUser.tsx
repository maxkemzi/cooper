import {RouteName} from "@shared/constants";
import {Typography} from "@shared/ui";
import {FC} from "react";
import {AvatarStyled, ProjectCardUserStyled} from "./ProjectCardUser.styled";

interface Props {
	username: string;
	avatar: string | null;
}

const ProjectCardUser: FC<Props> = ({username, avatar}) => (
	<ProjectCardUserStyled to={`${RouteName.PROFILE}/${username}`}>
		<Typography variant="h6" noWrap>
			{username}
		</Typography>
		<AvatarStyled imagePath={avatar} />
	</ProjectCardUserStyled>
);

export default ProjectCardUser;
