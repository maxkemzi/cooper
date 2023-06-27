import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ErrorState {
	errorMessage: string | null;
	hasError: boolean;
}

const initialState: ErrorState = {
	errorMessage: null,
	hasError: false
};

const errorSlice = createSlice({
	name: "error",
	initialState,
	reducers: {
		setError(
			state,
			action: PayloadAction<NonNullable<ErrorState["errorMessage"]>>
		) {
			state.errorMessage = action.payload;
			state.hasError = true;
		},
		clearError(state) {
			state.errorMessage = null;
			state.hasError = false;
		}
	}
});

export default errorSlice.reducer;
export const {setError, clearError} = errorSlice.actions;
