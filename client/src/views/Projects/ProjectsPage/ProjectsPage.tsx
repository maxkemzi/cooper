import Page from "@components/Page/Page";
import ProjectList from "@components/ProjectList/ProjectList";
import useProjects from "@hooks/useProjects";
import useTypedDispatch from "@hooks/useTypedDispatch";
import ProjectsService from "@services/projects/projects.service";
import {projectsActs} from "@store/projects/projects.slice";
import React, {useEffect} from "react";
import ProjectsHeader from "../ProjectsHeader/ProjectsHeader";
import {ProjectsPageInner} from "./ProjectsPage.styled";

const ProjectsPage = () => {
	const dispatch = useTypedDispatch();

	const {isLoading, projects, page, sort, search, limit} = useProjects();

	useEffect(() => {
		dispatch(ProjectsService.fetchAll({page, sort: sort.value, search, limit}));
	}, [dispatch, limit, page, search, sort.value]);

	// Resetting number of projects on unmount
	useEffect(
		() => () => {
			dispatch(projectsActs.setPage(1));
		},
		[dispatch]
	);

	return (
		<Page>
			<ProjectsPageInner>
				<ProjectsHeader />
				<ProjectList isLoading={isLoading} projects={projects} />
			</ProjectsPageInner>
		</Page>
	);
};

export default ProjectsPage;
