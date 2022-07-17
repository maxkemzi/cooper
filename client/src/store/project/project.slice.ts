import {Project} from "@customTypes/entities";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProjectInitialState {
	project: Project;
	isLoading: boolean;
}

const initialState: ProjectInitialState = {
	project: {
		_id: "1",
		workType: "default",
		description: "",
		budget: 0,
		creator: {avatar: "", username: "", createdDate: "", projectsCount: 0},
		createdDate: "",
		categories: [],
		title: ""
	},
	isLoading: false
};

const projectSlice = createSlice({
	name: "project",
	initialState,
	reducers: {
		setProject(state, action: PayloadAction<Project>) {
			state.project = action.payload;
		},
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		}
	}
});

export default projectSlice.reducer;
export const projectActs = projectSlice.actions;
