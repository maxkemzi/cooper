import {RootState} from "..";

export const getProjectIsLoading = (state: RootState) =>
	state.projectState.isLoading;

export const getProjectWorkType = (state: RootState) =>
	state.projectState.project.workType;

export const getProjectBudget = (state: RootState) =>
	state.projectState.project.budget;

export const getProjectTitle = (state: RootState) =>
	state.projectState.project.title;

export const getProjectDesc = (state: RootState) =>
	state.projectState.project.description;

export const getProjectCategories = (state: RootState) =>
	state.projectState.project.categories;

export const getProjectCreatorCreatedDate = (state: RootState) =>
	state.projectState.project.creator.createdDate;

export const getProjectCreatorProjectsCount = (state: RootState) =>
	state.projectState.project.creator.projectsCount;
