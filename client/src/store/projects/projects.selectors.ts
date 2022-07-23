import {RootState} from "..";

export const getProjects = (state: RootState) => state.projectsState.projects;

export const getProjectsIsLoading = (state: RootState) =>
	state.projectsState.isLoading;

export const getProjectsSearch = (state: RootState) =>
	state.projectsState.search;

export const getProjectsLimit = (state: RootState) => state.projectsState.limit;

export const getProjectsSortValue = (state: RootState) =>
	state.projectsState.sort.value;

export const getProjectsSortTitle = (state: RootState) =>
	state.projectsState.sort.title;

export const getProjectsSortId = (state: RootState) =>
	state.projectsState.sort.id;

export const getProjectsPage = (state: RootState) => state.projectsState.page;

export const getProjectsTotalCount = (state: RootState) =>
	state.projectsState.totalCount;

export const getProjectsIsLoadingMore = (state: RootState) =>
	state.projectsState.isLoadingMore;

export const getProjectsIsSaving = (state: RootState) =>
	state.projectsState.isSaving;
