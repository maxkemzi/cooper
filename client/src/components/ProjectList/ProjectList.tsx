import {IProject} from "@customTypes/index";
import ProjectItemSkeleton from "@skeletons/ProjectItemSkeleton/ProjectItemSkeleton";
import React, {FC} from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import {StyledProjectList} from "./ProjectList.styled";

interface ProjectListProps {
	projects: IProject[];
	isLoading: boolean;
}

const ProjectList: FC<ProjectListProps> = ({projects, isLoading}) => {
	if (projects.length === 0 && !isLoading) {
		return <p>There are no projects.</p>;
	}

	return (
		<StyledProjectList>
			{isLoading
				? [1, 2, 3, 4, 5, 6].map(n => <ProjectItemSkeleton key={n} />)
				: projects.map(project => (
						<ProjectItem
							key={project._id}
							_id={project._id}
							workType={project.workType}
							budget={project.budget}
							skills={project.skills}
							title={project.title}
							description={project.description}
							creator={project.creator}
							createdDate={project.createdDate}
							date={project.createdDate}
						/>
				  ))}
		</StyledProjectList>
	);
};

export default ProjectList;
