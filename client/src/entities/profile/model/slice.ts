import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {Profile} from "./types";

interface ProfileState {
	data: Profile | null;
	isFetching: boolean;
}

const initialState: ProfileState = {
	data: null,
	isFetching: false
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setProfile(state, action: PayloadAction<ProfileState["data"]>) {
			state.data = action.payload;
		},
		setIsFetching(state, action: PayloadAction<ProfileState["isFetching"]>) {
			state.isFetching = action.payload;
		}
	}
});

export default profileSlice.reducer;
export const {setIsFetching, setProfile} = profileSlice.actions;
