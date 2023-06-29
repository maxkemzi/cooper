import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {ProjectToApi} from "../api";
import {Project} from "./types";

type ProjectsSortOption = {id: number | string; title: string; value: string};

interface ProjectsState {
	data: Project[];
	totalCount: number;
	totalPages: number;
	page: number;
	limit: number;
	sort: ProjectsSortOption;
	search: string;
	isFetching: boolean;
	isFetchingMore: boolean;
	shouldRefetch: boolean;
}

const initialState: ProjectsState = {
	data: [],
	totalCount: 0,
	totalPages: 1,
	shouldRefetch: false,
	page: 1,
	limit: 6,
	sort: {title: "Date", value: "createdDate", id: 1},
	search: "",
	isFetching: false,
	isFetchingMore: false
};

const projectsSlice = createSlice({
	name: "projects",
	initialState,
	reducers: {
		setProjects(state, action: PayloadAction<ProjectsState["data"]>) {
			state.data = action.payload;
		},
		addProjects(state, action: PayloadAction<ProjectsState["data"]>) {
			state.data = [...state.data, ...action.payload];
		},
		setIsFetching(state, action: PayloadAction<ProjectsState["isFetching"]>) {
			state.isFetching = action.payload;
		},
		setIsFetchingMore(
			state,
			action: PayloadAction<ProjectsState["isFetchingMore"]>
		) {
			state.isFetchingMore = action.payload;
		},
		addProject(state, action: PayloadAction<ProjectsState["data"][number]>) {
			state.data.push(action.payload);
		},
		removeProject(state, action: PayloadAction<string>) {
			state.data = state.data.filter(element => element.id !== action.payload);

			state.totalCount -= 1;
		},
		editProject(
			state,
			action: PayloadAction<{id: string; project: Partial<ProjectToApi>}>
		) {
			const {id, project} = action.payload;

			state.data = state.data.map(element =>
				element.id === id ? {...element, ...project} : element
			);
		},
		setSort(state, action: PayloadAction<ProjectsState["sort"]>) {
			state.sort = action.payload;
		},
		setTotalCount(state, action: PayloadAction<ProjectsState["totalCount"]>) {
			state.totalCount = action.payload;
		},
		setPage(state, action: PayloadAction<ProjectsState["page"]>) {
			state.page = action.payload;
		},
		setSearch(state, action: PayloadAction<ProjectsState["search"]>) {
			state.search = action.payload;
		},
		setTotalPages(state, action: PayloadAction<ProjectsState["totalPages"]>) {
			state.totalPages = action.payload;
		},
		triggerRefetch(state) {
			state.shouldRefetch = !state.shouldRefetch;
		}
	}
});

export default projectsSlice.reducer;
export type {ProjectsSortOption};
export const {
	addProject,
	addProjects,
	removeProject,
	setIsFetching,
	setIsFetchingMore,
	setPage,
	setProjects,
	setSearch,
	setSort,
	setTotalCount,
	editProject,
	setTotalPages,
	triggerRefetch
} = projectsSlice.actions;
