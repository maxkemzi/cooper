import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDropdownOption, IProject} from "@customTypes/index";

interface ProjectsInitialState {
	projects: IProject[];
	totalCount: number;
	page: number;
	limit: number;
	dropdownSelection: IDropdownOption;
	isSaving: boolean;
	search: string;
	isLoading: boolean;
	isLoadingMore: boolean;
}

const initialState: ProjectsInitialState = {
	projects: [],
	totalCount: 0,
	page: 1,
	limit: 6,
	dropdownSelection: {title: "", value: "", id: 0},
	isSaving: false,
	search: "",
	isLoading: false,
	isLoadingMore: false
};

const projectsSlice = createSlice({
	name: "projects",
	initialState,
	reducers: {
		setProjects(state, action: PayloadAction<IProject[]>) {
			state.projects = action.payload;
		},
		addProjects(state, action: PayloadAction<IProject[]>) {
			state.projects = [...state.projects, ...action.payload];
		},
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
		setIsLoadingMore(state, action: PayloadAction<boolean>) {
			state.isLoadingMore = action.payload;
		},
		addProject(state, action: PayloadAction<IProject>) {
			state.projects.push(action.payload);
		},
		removeProject(state, action: PayloadAction<number>) {
			state.projects = state.projects.filter(
				project => project._id !== action.payload
			);
		},
		setDropdownSelection(state, action: PayloadAction<IDropdownOption>) {
			state.dropdownSelection = action.payload;
		},
		setTotalCount(state, action: PayloadAction<number>) {
			state.totalCount = action.payload;
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
		setIsSaving(state, action) {
			state.isSaving = action.payload;
		}
	}
});

export default projectsSlice.reducer;
export const projectsActs = projectsSlice.actions;
