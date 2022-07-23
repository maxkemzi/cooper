import useTypedSelector from "@hooks/useTypedSelector";
import ProjectsCountSkeleton from "@skeletons/ProjectsCountSkeleton/ProjectsCountSkeleton";
import {
	getProjectsIsLoading,
	getProjectsTotalCount
} from "@store/projects/projects.selectors";
import React from "react";
import StyledProjectsCount from "./ProjectsCount.styled";

const ProjectsCount = () => {
	const isLoading = useTypedSelector(getProjectsIsLoading);
	const totalCount = useTypedSelector(getProjectsTotalCount);

	if (isLoading) {
		return <ProjectsCountSkeleton />;
	}

	return (
		<StyledProjectsCount>
			{totalCount === null ? "Response error" : `${totalCount} projects`}
		</StyledProjectsCount>
	);
};

export default ProjectsCount;
