import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {DropdownOptionData} from "@shared/ui";
import {Project} from "./types";

interface ProjectsParams {
	page: number;
	limit: number;
	sort: DropdownOptionData;
	search: string;
}

interface ProjectsState {
	data: Project[];
	totalCount: number | null;
	params: ProjectsParams;
	isFetching: boolean;
}

const initialState: ProjectsState = {
	data: [],
	totalCount: null,
	params: {
		page: 1,
		limit: 6,
		sort: {title: "Date", value: "createdDate", id: 1},
		search: ""
	},
	isFetching: false
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
		addProject(state, action: PayloadAction<ProjectsState["data"][number]>) {
			state.data.push(action.payload);
		},
		removeProject(state, action: PayloadAction<string>) {
			state.data = state.data.filter(element => element.id !== action.payload);

			if (state.totalCount != null) {
				state.totalCount -= 1;
			}
		},
		updateProject(
			state,
			action: PayloadAction<{id: string; project: Project}>
		) {
			const {id, project} = action.payload;

			state.data = state.data.map(element =>
				element.id === id ? {...element, ...project} : element
			);
		},
		setSort(state, action: PayloadAction<DropdownOptionData>) {
			state.params.sort = action.payload;
		},
		setTotalCount(state, action: PayloadAction<ProjectsState["totalCount"]>) {
			state.totalCount = action.payload;
		},
		setPage(state, action: PayloadAction<ProjectsParams["page"]>) {
			state.params.page = action.payload;
		},
		setSearch(state, action: PayloadAction<ProjectsParams["search"]>) {
			state.params.search = action.payload;
		},
		clearState() {
			return initialState;
		}
	}
});

export default projectsSlice.reducer;
export const {
	addProject,
	addProjects,
	removeProject,
	setIsFetching,
	setPage,
	setProjects,
	setSearch,
	setSort,
	setTotalCount,
	updateProject,
	clearState
} = projectsSlice.actions;
