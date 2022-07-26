import {Project} from "@customTypes/entities";
import {DropdownOption} from "@customTypes/store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ProjectsInitialState {
	projects: Project[];
	totalCount: number;
	page: number;
	limit: number;
	sort: DropdownOption;
	isAddingToFavorites: boolean;
	search: string;
	isLoading: boolean;
	isLoadingMore: boolean;
}

export const initialState: ProjectsInitialState = {
	projects: [],
	totalCount: 0,
	page: 1,
	limit: 6,
	sort: {title: "Date", value: "createdDate", id: 1},
	isAddingToFavorites: false,
	search: "",
	isLoading: false,
	isLoadingMore: false
};

const projectsSlice = createSlice({
	name: "projects",
	initialState,
	reducers: {
		setProjects(state, action: PayloadAction<Project[]>) {
			state.projects = action.payload;
		},
		addProjects(state, action: PayloadAction<Project[]>) {
			state.projects = [...state.projects, ...action.payload];
		},
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
		setIsLoadingMore(state, action: PayloadAction<boolean>) {
			state.isLoadingMore = action.payload;
		},
		addProject(state, action: PayloadAction<Project>) {
			state.projects.push(action.payload);
		},
		removeProject(state, action: PayloadAction<number | string>) {
			state.projects = state.projects.filter(
				project => project._id !== action.payload
			);
			state.totalCount -= 1;
		},
		updateProject(state, action: PayloadAction<Project>) {
			state.projects = state.projects.map(p =>
				p._id === action.payload._id ? {...p, ...action.payload} : p
			);
		},
		setSort(state, action: PayloadAction<DropdownOption>) {
			state.sort = action.payload;
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
		setIsAddingToFavorites(state, action) {
			state.isAddingToFavorites = action.payload;
		}
	}
});

export default projectsSlice.reducer;
export const projectsActs = projectsSlice.actions;
