import {PROJECTS_ROUTE} from "@utils/constants/routeNames";
import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import Avatar from "../../../Avatar/Avatar";
import {
	StyledProjectItemHeader,
	ItemHeaderTitle,
	ItemHeaderUsername,
	ItemHeaderUserLink
} from "./ProjectItemHeader.styled";

interface ProjectItemHeaderProps {
	title: string;
	id: string | number;
	username: string;
	avatar: string;
}

const ProjectItemHeader: FC<ProjectItemHeaderProps> = ({
	title,
	id,
	username,
	avatar
}) => (
	<StyledProjectItemHeader>
		<NavLink to={`${PROJECTS_ROUTE}/${id}`}>
			<ItemHeaderTitle>{title}</ItemHeaderTitle>
		</NavLink>
		<ItemHeaderUserLink to={`/profile/${username}`}>
			<ItemHeaderUsername>{username}</ItemHeaderUsername>
			<Avatar imagePath={avatar} />
		</ItemHeaderUserLink>
	</StyledProjectItemHeader>
);

export default ProjectItemHeader;
