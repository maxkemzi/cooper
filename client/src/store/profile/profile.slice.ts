import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../types";

interface ProfileInitialState {
	profile: IUser;
	isLoading: boolean;
}

const initialState: ProfileInitialState = {
	profile: {
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
	isLoading: false
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setProfile(state, action: PayloadAction<IUser>) {
			state.profile = {...state.profile, ...action.payload};
		},
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		}
	}
});

export default profileSlice.reducer;
export const profileActs = profileSlice.actions;
