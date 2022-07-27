import InfiniteScrollList from "@components/InfiniteScrollList/InfiniteScrollList";
import Layout from "@components/Layout/Layout";
import Page from "@components/Page/Page";
import {ProjectList} from "@components/ProjectList";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import ProjectsService from "@services/projects/projects.service";
import {
	getProjects,
	getProjectsIsLoading,
	getProjectsIsLoadingMore,
	getProjectsLimit,
	getProjectsPage,
	getProjectsSearch,
	getProjectsSortValue,
	getProjectsTotalCount
} from "@store/projects/projects.selectors";
import {
	FAVORITE_PROJECTS_ROUTE,
	YOUR_PROJECTS_ROUTE
} from "@utils/constants/routeNames";
import React, {useCallback, useEffect} from "react";
import {useLocation} from "react-router-dom";
import ProjectsHeader from "../ProjectsHeader/ProjectsHeader";
import {ProjectsPageInner} from "./ProjectsPage.styled";

const ProjectsPage = () => {
	const dispatch = useTypedDispatch();
	const location = useLocation();

	// Selectors
	const search = useTypedSelector(getProjectsSearch);
	const projects = useTypedSelector(getProjects);
	const page = useTypedSelector(getProjectsPage);
	const limit = useTypedSelector(getProjectsLimit);
	const totalCount = useTypedSelector(getProjectsTotalCount);
	const sort = useTypedSelector(getProjectsSortValue);
	const isLoading = useTypedSelector(getProjectsIsLoading);
	const isLoadingMore = useTypedSelector(getProjectsIsLoadingMore);

	const hasMore = page < Math.ceil(totalCount / limit);

	const handleLoadMore = useCallback(() => {
		switch (location.pathname) {
			case YOUR_PROJECTS_ROUTE:
				dispatch(
					ProjectsService.fetchMoreByAuth({
						page: page + 1,
						limit,
						search,
						sort
					})
				);
				break;
			case FAVORITE_PROJECTS_ROUTE:
				dispatch(
					ProjectsService.fetchMoreFavorites({
						page: page + 1,
						limit,
						search,
						sort
					})
				);
				break;
			default:
				dispatch(
					ProjectsService.fetchMore({
						page: page + 1,
						limit,
						search,
						sort
					})
				);
		}
	}, [dispatch, limit, location.pathname, page, search, sort]);

	useEffect(() => {
		switch (location.pathname) {
			case YOUR_PROJECTS_ROUTE:
				dispatch(ProjectsService.fetchByAuth({page: 1, sort, search, limit}));
				break;
			case FAVORITE_PROJECTS_ROUTE:
				dispatch(
					ProjectsService.fetchFavorites({
						page: 1,
						sort,
						search,
						limit
					})
				);
				break;
			default:
				dispatch(ProjectsService.fetchAll({page: 1, sort, search, limit}));
		}
	}, [dispatch, limit, location.pathname, search, sort]);

	return (
		<Layout>
			<Page>
				<ProjectsPageInner>
					<ProjectsHeader />
					<InfiniteScrollList
						hasMore={hasMore}
						isLoading={isLoadingMore}
						onLoadMore={handleLoadMore}
					>
						<ProjectList isLoading={isLoading} projects={projects} />
					</InfiniteScrollList>
				</ProjectsPageInner>
			</Page>
		</Layout>
	);
};

export default ProjectsPage;
