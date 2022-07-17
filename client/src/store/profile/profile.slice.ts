import {User} from "@customTypes/entities";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProfileInitialState {
	profile: User;
	isLoading: boolean;
}

const initialState: ProfileInitialState = {
	profile: {
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
	isLoading: false
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setProfile(state, action: PayloadAction<User>) {
			state.profile = {...state.profile, ...action.payload};
		},
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		}
	}
});

export default profileSlice.reducer;
export const profileActs = profileSlice.actions;
