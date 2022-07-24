import useWindowSize from "@hooks/useWindowSize";
import {PROJECTS_ROUTE} from "@utils/constants/routeNames";
import ScreenSizes from "@utils/constants/screenSizes";
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
	({title, id, username, avatar}) => {
		const {width} = useWindowSize();
		return (
			<StyledProjectItemHeader>
				<ItemHeaderTitleLink to={`${PROJECTS_ROUTE}/${id}`}>
					<ItemHeaderTitle>{title}</ItemHeaderTitle>
				</ItemHeaderTitleLink>
				<ItemHeaderUserLink to={`/profile/${username}`}>
					<ItemHeaderUsername>{username}</ItemHeaderUsername>
					<Avatar
						marginRight={width <= ScreenSizes.PhoneWidth && "8px"}
						imagePath={avatar}
					/>
				</ItemHeaderUserLink>
			</StyledProjectItemHeader>
		);
	}
);

export default ProjectItemHeader;
