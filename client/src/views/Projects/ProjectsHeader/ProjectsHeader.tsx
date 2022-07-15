import React from "react";
import ProjectsDropdown from "@views/Projects/ProjectsDropdown/ProjectsDropdown";
import StyledProjectsHeader from "./ProjectsHeader.styled";
import ProjectsCount from "../ProjectsCount/ProjectsCount";
import ProjectsSearchBar from "../ProjectsSearchBar/ProjectsSearchBar";

const ProjectsHeader = () => (
	<StyledProjectsHeader>
		<ProjectsCount />
		<ProjectsSearchBar />
		<ProjectsDropdown />
	</StyledProjectsHeader>
);

export default ProjectsHeader;
