import ToastItem from "@customTypes/store/toastItem";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppInitialState {
	error: string;
	toastList: ToastItem[];
}

const initialState: AppInitialState = {
	error: "",
	toastList: []
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setError(state, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		setToastList(state, action: PayloadAction<ToastItem[]>) {
			state.toastList = action.payload;
		}
	}
});

export default appSlice.reducer;
export const appActs = appSlice.actions;
