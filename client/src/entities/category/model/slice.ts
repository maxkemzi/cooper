import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {Category} from "./types";

interface CategoriesState {
	data: Category[];
	isFetching: boolean;
}

const initialState: CategoriesState = {
	data: [],
	isFetching: false
};

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		setCategories(state, action: PayloadAction<CategoriesState["data"]>) {
			state.data = action.payload;
		},
		setIsFetching(state, action: PayloadAction<CategoriesState["isFetching"]>) {
			state.isFetching = action.payload;
		}
	}
});

export default categoriesSlice.reducer;
export const {setCategories, setIsFetching} = categoriesSlice.actions;
