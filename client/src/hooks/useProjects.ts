import ProjectsService from "@services/projects/projects.service";
import useTypedDispatch from "./useTypedDispatch";
import useTypedSelector from "./useTypedSelector";

const useProjects = () => {
	const dispatch = useTypedDispatch();
	const search = useTypedSelector(state => state.projectsState.search);
	const projects = useTypedSelector(state => state.projectsState.projects);
	const page = useTypedSelector(state => state.projectsState.page);
	const limit = useTypedSelector(state => state.projectsState.limit);
	const totalCount = useTypedSelector(state => state.projectsState.totalCount);
	const sort = useTypedSelector(state => state.projectsState.dropdownSelection);
	const isLoading = useTypedSelector(state => state.projectsState.isLoading);
	const isLoadingMore = useTypedSelector(
		state => state.projectsState.isLoadingMore
	);

	const fetchMore = () =>
		dispatch(
			ProjectsService.fetchMore({
				page: page + 1,
				limit,
				search,
				sort: sort.value
			})
		);

	return {
		search,
		projects,
		page,
		limit,
		totalCount,
		sort,
		isLoading,
		isLoadingMore,
		fetchMore
	};
};

export default useProjects;
