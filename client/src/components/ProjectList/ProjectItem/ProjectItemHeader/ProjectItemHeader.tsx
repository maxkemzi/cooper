import {PROJECTS_ROUTE} from "@utils/constants/routeNames";
import React, {FC, memo} from "react";
import Avatar from "../../../Avatar/Avatar";
import {
	StyledProjectItemHeader,
	ItemHeaderTitle,
	ItemHeaderTitleLink,
	ItemHeaderUsername,
	ItemHeaderUserLink
} from "./ProjectItemHeader.styled";

interface ProjectItemHeaderProps {
	title: string;
	id: string | number;
	username: string;
	avatar: string;
}

const ProjectItemHeader: FC<ProjectItemHeaderProps> = memo(
	({title, id, username, avatar}) => (
		<StyledProjectItemHeader>
			<ItemHeaderTitleLink to={`${PROJECTS_ROUTE}/${id}`}>
				<ItemHeaderTitle>{title}</ItemHeaderTitle>
			</ItemHeaderTitleLink>
			<ItemHeaderUserLink to={`/profile/${username}`}>
				<ItemHeaderUsername>{username}</ItemHeaderUsername>
				<Avatar imagePath={avatar} />
			</ItemHeaderUserLink>
		</StyledProjectItemHeader>
	)
);

export default ProjectItemHeader;
