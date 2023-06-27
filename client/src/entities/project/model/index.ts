import projectReducer from "./reducer";

export {projectReducer};
export {
	setIsFetching as setProjectIsFetching,
	setProject,
	setIsAddingToFavorites
} from "./projectSlice";
export {
	addProject,
	addProjects,
	removeProject,
	setIsFetching as setProjectsIsFetching,
	setPage as setProjectsPage,
	setProjects,
	setSearch as setProjectsSearch,
	setSort as setProjectsSort,
	setTotalCount as setProjectsTotalCount,
	editProject,
	clearState as clearProjectsState
} from "./projectsSlice";
export type {ProjectsSortOption} from "./projectsSlice";
export * from "./thunks";
export * from "./selectors";
export * from "./types";
