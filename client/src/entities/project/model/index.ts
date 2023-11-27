import projectReducer from "./reducer";

export {projectReducer};
export {
	setIsFetching as setProjectIsFetching,
	setProject
} from "./projectSlice";
export {
	addProject,
	addProjects,
	removeProject,
	setPage as setProjectsPage,
	setProjects,
	setSearch as setProjectsSearch,
	setSort as setProjectsSort,
	setTotalCount as setProjectsTotalCount,
	editProject,
	triggerRefetch as triggerProjectsRefetch
} from "./projectsSlice";
export type {ProjectsSortOption} from "./projectsSlice";
export * from "./thunks";
export * from "./selectors";
export * from "./types";
