import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
	isAuth: boolean;
	isFetching: boolean;
}

const initialState: AuthState = {
	isAuth: false,
	isFetching: true
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setIsAuth(state, action: PayloadAction<AuthState["isAuth"]>) {
			state.isAuth = action.payload;
		},
		setIsFetching(state, action: PayloadAction<AuthState["isFetching"]>) {
			state.isFetching = action.payload;
		}
	}
});

export default authSlice.reducer;
export const {setIsAuth, setIsFetching} = authSlice.actions;
