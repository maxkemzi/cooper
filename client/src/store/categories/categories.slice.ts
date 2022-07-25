import {Category} from "@customTypes/entities";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CategoriesInitialState {
	categories: Category[];
	isLoading: boolean;
}

export const initialState: CategoriesInitialState = {
	categories: [],
	isLoading: false
};

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		setCategories(state, action: PayloadAction<Category[]>) {
			state.categories = action.payload;
		},
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		}
	}
});

export default categoriesSlice.reducer;
export const categoriesActs = categoriesSlice.actions;
