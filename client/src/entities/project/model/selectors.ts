// Single project selectors
const selectProject = (state: RootState) => state.projectState.single.data;

const selectProjectIsFetching = (state: RootState) =>
	state.projectState.single.isFetching;

// Multiple project selectors
const selectProjects = (state: RootState) => state.projectState.multiple.data;

const selectProjectsIsFetching = (state: RootState) =>
	state.projectState.multiple.isFetching;

const selectProjectsSearch = (state: RootState) =>
	state.projectState.multiple.params.search;

const selectProjectsLimit = (state: RootState) =>
	state.projectState.multiple.params.limit;

const selectProjectsSort = (state: RootState) =>
	state.projectState.multiple.params.sort;

const selectProjectsPage = (state: RootState) =>
	state.projectState.multiple.params.page;

const selectProjectsTotalCount = (state: RootState) =>
	state.projectState.multiple.totalCount;

export {
	selectProject,
	selectProjectIsFetching,
	selectProjectsTotalCount,
	selectProjects,
	selectProjectsIsFetching,
	selectProjectsLimit,
	selectProjectsPage,
	selectProjectsSearch,
	selectProjectsSort
};
