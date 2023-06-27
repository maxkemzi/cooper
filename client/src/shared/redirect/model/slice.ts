import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface RedirectState {
	path: string | null;
}

const initialState: RedirectState = {
	path: null
};

const redirectSlice = createSlice({
	name: "redirect",
	initialState,
	reducers: {
		redirect(state, action: PayloadAction<RedirectState["path"]>) {
			state.path = action.payload;
		},
		completeRedirect(state) {
			state.path = null;
		}
	}
});

export default redirectSlice.reducer;
export const {redirect, completeRedirect} = redirectSlice.actions;
