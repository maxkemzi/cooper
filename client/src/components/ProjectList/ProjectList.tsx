import {Project} from "@customTypes/entities";
import ProjectItemSkeleton from "@skeletons/ProjectItemSkeleton/ProjectItemSkeleton";
import FallbackMsgs from "@utils/constants/fallbackMsgs";
import React, {FC} from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import {StyledProjectList} from "./ProjectList.styled";

interface ProjectListProps {
	projects: Project[];
	isLoading: boolean;
}

const ProjectList: FC<ProjectListProps> = ({projects, isLoading}) => {
	if (projects.length === 0 && !isLoading) {
		return <p>{FallbackMsgs.ProjectList}</p>;
	}

	return (
		<StyledProjectList>
			{isLoading
				? [1, 2, 3, 4, 5, 6].map(n => <ProjectItemSkeleton key={n} />)
				: projects.map(project => (
						<ProjectItem
							key={project._id}
							id={project._id}
							workType={project.workType}
							budget={project.budget}
							categories={project.categories}
							title={project.title}
							description={project.description}
							creator={project.creator}
							createdDate={project.createdDate}
						/>
				  ))}
		</StyledProjectList>
	);
};

export default ProjectList;
