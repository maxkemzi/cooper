import ProjectsDropdown from "@views/Projects/ProjectsDropdown/ProjectsDropdown";
import React, {memo} from "react";
import ProjectsCount from "../ProjectsCount/ProjectsCount";
import ProjectsSearchBar from "../ProjectsSearchBar/ProjectsSearchBar";
import StyledProjectsHeader from "./ProjectsHeader.styled";

const ProjectsHeader = memo(() => (
	<StyledProjectsHeader>
		<ProjectsCount />
		<ProjectsSearchBar />
		<ProjectsDropdown />
	</StyledProjectsHeader>
));

export default ProjectsHeader;
