import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../types";

interface AuthInitialState {
	user: IUser;
	isAuth: boolean;
	isLoading: boolean;
}

const initialState: AuthInitialState = {
	user: {
		email: "",
		location: "",
		avatar: "",
		id: 0,
		description: "",
		isActivated: false,
		projectsCount: 0,
		saves: [],
		username: ""
	},
	isAuth: false,
	isLoading: true
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setIsAuth(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload;
		},
		setUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
		},
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		}
	}
});

export default authSlice.reducer;
export const authActs = authSlice.actions;
