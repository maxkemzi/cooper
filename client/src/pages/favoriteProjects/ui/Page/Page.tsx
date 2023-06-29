import {
	fetchFavoriteProjectsThunk,
	ProjectCard,
	ProjectList,
	ProjectListPanel,
	selectProjects,
	useProjectsFetchUtils
} from "@entities/project";
import {withAuthProtection} from "@features/auth";
import {InfiniteScrollList} from "@features/infiniteScroll";
import {ProjectsSearchBar} from "@features/project/searchProjects";
import {ProjectsSortDropdown} from "@features/project/sortProjects";
import {AddToFavoritesButton} from "@features/user/addToFavorites";
import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {Widget} from "@shared/ui";
import {useCallback, useEffect} from "react";
import {WidgetStyled} from "./Page.styled";

const Page = () => {
	const dispatch = useTypedDispatch();

	const {hasMore, isFetchingMore, isFetching, params, shouldRefetch} =
		useProjectsFetchUtils();

	const projects = useTypedSelector(selectProjects);

	useEffect(() => {
		dispatch(
			fetchFavoriteProjectsThunk({
				page: 1,
				limit: params.limit,
				search: params.search,
				sort: params.sort
			})
		);
	}, [dispatch, params.limit, params.search, params.sort, shouldRefetch]);

	const handleFetchMore = useCallback(() => {
		dispatch(fetchFavoriteProjectsThunk({...params, page: params.page + 1}));
	}, [dispatch, params]);

	return (
		<>
			<WidgetStyled>
				<ProjectListPanel
					leftContentSlot={<ProjectsSearchBar />}
					rightContentSlot={<ProjectsSortDropdown />}
				/>
			</WidgetStyled>
			<Widget>
				<InfiniteScrollList
					onFetchMore={handleFetchMore}
					isFetching={isFetching || isFetchingMore}
					hasMore={hasMore}
				>
					<ProjectList>
						{projects.map(project => (
							<ProjectCard
								key={project.id}
								project={project}
								actionsSlot={<AddToFavoritesButton projectId={project.id} />}
							/>
						))}
					</ProjectList>
				</InfiniteScrollList>
			</Widget>
		</>
	);
};

export default withAuthProtection(Page);
