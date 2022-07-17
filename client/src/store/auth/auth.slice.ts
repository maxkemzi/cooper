import {User} from "@customTypes/entities";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthInitialState {
	user: User;
	isAuth: boolean;
	isLoading: boolean;
}

const initialState: AuthInitialState = {
	user: {
		email: "",
		location: "",
		avatar: "",
		_id: "1",
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
		setUser(state, action: PayloadAction<User>) {
			state.user = action.payload;
		},
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		}
	}
});

export default authSlice.reducer;
export const authActs = authSlice.actions;
