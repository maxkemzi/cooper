import {RootState} from "..";

export const getCategories = (state: RootState) =>
	state.categoriesState.categories;

export const getCategoriesIsLoading = (state: RootState) =>
	state.categoriesState.isLoading;
