import InfiniteScrollList from "@components/InfiniteScrollList/InfiniteScrollList";
import Page from "@components/Page/Page";
import {ProjectList} from "@components/ProjectList";
import useProjects from "@hooks/useProjects";
import useTypedDispatch from "@hooks/useTypedDispatch";
import ProjectsService from "@services/projects/projects.service";
import React, {useEffect} from "react";
import ProjectsHeader from "../ProjectsHeader/ProjectsHeader";
import {ProjectsPageInner} from "./ProjectsPage.styled";

const ProjectsPage = () => {
	const dispatch = useTypedDispatch();

	const {
		isLoading,
		isLoadingMore,
		projects,
		page,
		sort,
		search,
		limit,
		totalCount
	} = useProjects();

	const handleLoadMore = () =>
		dispatch(
			ProjectsService.fetchMore({
				page: page + 1,
				limit,
				search,
				sort: sort.value
			})
		);

	useEffect(() => {
		dispatch(
			ProjectsService.fetchAll({page: 1, sort: sort.value, search, limit})
		);
	}, [dispatch, limit, search, sort.value]);

	return (
		<Page>
			<ProjectsPageInner>
				<ProjectsHeader />
				<InfiniteScrollList
					hasMore={page < Math.ceil(totalCount / limit)}
					isLoading={isLoadingMore}
					onLoadMore={handleLoadMore}
				>
					<ProjectList isLoading={isLoading} projects={projects} />
				</InfiniteScrollList>
			</ProjectsPageInner>
		</Page>
	);
};

export default ProjectsPage;
