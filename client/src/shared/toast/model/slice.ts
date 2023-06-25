import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ToastType} from "@shared/ui";

interface ToastState {
	toast: ToastType | null;
}

const initialState: ToastState = {
	toast: null
};

const toastSlice = createSlice({
	name: "toast",
	initialState,
	reducers: {
		openSuccessToast(state, action: PayloadAction<string>) {
			state.toast = {variant: "success", message: action.payload};
		},
		openErrorToast(state, action: PayloadAction<string>) {
			state.toast = {variant: "error", message: action.payload};
		},
		openInfoToast(state, action: PayloadAction<string>) {
			state.toast = {variant: "info", message: action.payload};
		},
		openWarningToast(state, action: PayloadAction<string>) {
			state.toast = {variant: "warning", message: action.payload};
		}
	}
});

export default toastSlice.reducer;
export const {
	openErrorToast,
	openInfoToast,
	openSuccessToast,
	openWarningToast
} = toastSlice.actions;
