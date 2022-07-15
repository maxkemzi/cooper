import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProject} from "@customTypes/index";

interface ProjectInitialState {
	project: IProject;
	isLoading: boolean;
}

const initialState: ProjectInitialState = {
	project: {
		_id: 0,
		workType: "",
		description: "",
		budget: 0,
		creator: {avatar: "", username: "", createdDate: "", projectsCount: 0},
		date: "",
		skills: [],
		title: "",
		createdDate: ""
	},
	isLoading: false
};

const projectSlice = createSlice({
	name: "project",
	initialState,
	reducers: {
		setProject(state, action: PayloadAction<IProject>) {
			state.project = action.payload;
		},
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		}
	}
});

export default projectSlice.reducer;
export const projectActs = projectSlice.actions;
