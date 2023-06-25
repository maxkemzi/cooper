import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {Project} from "./types";

interface ProjectState {
	data: Project | null;
	isFetching: boolean;
	isAddingToFavorites: boolean;
}

const initialState: ProjectState = {
	data: null,
	isFetching: false,
	isAddingToFavorites: false
};

const projectSlice = createSlice({
	name: "project",
	initialState,
	reducers: {
		setProject(state, action: PayloadAction<ProjectState["data"]>) {
			state.data = action.payload;
		},
		setIsFetching(state, action: PayloadAction<ProjectState["isFetching"]>) {
			state.isFetching = action.payload;
		},
		setIsAddingToFavorites(
			state,
			action: PayloadAction<ProjectState["isAddingToFavorites"]>
		) {
			state.isAddingToFavorites = action.payload;
		}
	}
});

export default projectSlice.reducer;
export const {setIsFetching, setProject, setIsAddingToFavorites} =
	projectSlice.actions;
