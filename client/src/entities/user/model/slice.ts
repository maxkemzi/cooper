import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../types";

interface UserState {
	data: User | null;
	isAddingToFavorites: boolean;
}

const initialState: UserState = {
	data: null,
	isAddingToFavorites: false
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<UserState["data"]>) {
			state.data = action.payload;
		},
		editUser(state, action: PayloadAction<Partial<UserState["data"]>>) {
			state.data =
				state.data !== null ? {...state.data, ...action.payload} : null;
		},
		setIsAddingToFavorites(
			state,
			action: PayloadAction<UserState["isAddingToFavorites"]>
		) {
			state.isAddingToFavorites = action.payload;
		}
	}
});

export default userSlice.reducer;
export const {setUser, editUser, setIsAddingToFavorites} = userSlice.actions;
