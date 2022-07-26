import {PROJECTS_ROUTE} from "@utils/constants/routeNames";
import {getTimeInterval} from "@utils/helpers";
import React, {FC, memo} from "react";
import {NavLink} from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import {
	ItemFooterButtons,
	ItemFooterDate,
	SeeMoreButton,
	StyledProjectItemFooter
} from "./ProjectItemFooter.styled";

interface ProjectItemFooterProps {
	date: string;
	id: string | number;
}

const ProjectItemFooter: FC<ProjectItemFooterProps> = memo(({date, id}) => {
	const parsedDate: string = getTimeInterval(new Date(date));

	return (
		<StyledProjectItemFooter>
			<ItemFooterButtons>
				<SeeMoreButton to={`${PROJECTS_ROUTE}/${id}`} as={NavLink}>
					See more
				</SeeMoreButton>
				<FavoriteButton id={id} />
			</ItemFooterButtons>
			<ItemFooterDate>{parsedDate}</ItemFooterDate>
		</StyledProjectItemFooter>
	);
});

export default ProjectItemFooter;
