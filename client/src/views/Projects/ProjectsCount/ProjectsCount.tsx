import React from "react";
import ProjectsCountSkeleton from "@skeletons/ProjectsCountSkeleton/ProjectsCountSkeleton";
import useTypedSelector from "@hooks/useTypedSelector";
import StyledProjectsCount from "./ProjectsCount.styled";

const ProjectsCount = () => {
	const isLoading = useTypedSelector(state => state.projectsState.isLoading);
	const projectsCount = useTypedSelector(
		state => state.projectsState.totalCount
	);

	if (isLoading) {
		return <ProjectsCountSkeleton />;
	}

	return (
		<StyledProjectsCount>
			{projectsCount === null ? "Response error" : `${projectsCount} projects`}
		</StyledProjectsCount>
	);
};

export default ProjectsCount;
