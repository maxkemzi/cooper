import useWindowSize from "@hooks/useWindowSize";
import ScreenSizes from "@utils/constants/screenSizes";
import ProjectsDropdown from "@views/Projects/ProjectsDropdown/ProjectsDropdown";
import React, {memo} from "react";
import ProjectsCount from "../ProjectsCount/ProjectsCount";
import ProjectsSearchBar from "../ProjectsSearchBar/ProjectsSearchBar";
import {
	StyledProjectsHeader,
	ProjectsHeaderFlex
} from "./ProjectsHeader.styled";

const ProjectsHeader = memo(() => {
	const {width} = useWindowSize();
	return (
		<StyledProjectsHeader>
			{width <= ScreenSizes.TabletWidth ? (
				<>
					<ProjectsHeaderFlex>
						<ProjectsCount />
						<ProjectsDropdown />
					</ProjectsHeaderFlex>
					<ProjectsSearchBar />
				</>
			) : (
				<>
					<ProjectsHeaderFlex>
						<ProjectsCount />
						<ProjectsSearchBar />
					</ProjectsHeaderFlex>
					<ProjectsDropdown />
				</>
			)}
		</StyledProjectsHeader>
	);
});

export default ProjectsHeader;
