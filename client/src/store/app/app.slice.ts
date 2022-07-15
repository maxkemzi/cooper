import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IToast} from "@customTypes/index";

interface AppInitialState {
	error: string;
	toastList: IToast[];
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
		setToastList(state, action: PayloadAction<IToast[]>) {
			state.toastList = action.payload;
		}
	}
});

export default appSlice.reducer;
export const appActs = appSlice.actions;
