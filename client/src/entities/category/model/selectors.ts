const selectCategories = (state: RootState) => state.categoriesState.data;

const selectCategoriesIsFetching = (state: RootState) =>
	state.categoriesState.isFetching;

export {selectCategories, selectCategoriesIsFetching};
