import ToastItem from "@customTypes/store/toastItem";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type NotificationType = "success" | "danger" | "warning" | "info";

export interface AppInitialState {
	notification: {type: NotificationType; text: string};
	toastList: ToastItem[];
}

export const initialState: AppInitialState = {
	notification: {type: "success", text: ""},
	toastList: []
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setNotification(
			state,
			action: PayloadAction<{type: NotificationType; text: string}>
		) {
			state.notification = action.payload;
		},
		setToastList(state, action: PayloadAction<ToastItem[]>) {
			state.toastList = action.payload;
		},
		addToast(state, action: PayloadAction<ToastItem>) {
			state.toastList.push(action.payload);
		},
		deleteToast(state, action: PayloadAction<number | string>) {
			state.toastList = state.toastList.filter(
				toast => toast.id !== action.payload
			);
		}
	}
});

export default appSlice.reducer;
export const appActs = appSlice.actions;
