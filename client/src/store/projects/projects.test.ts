import {Project} from "@customTypes/entities";
import {DropdownOption} from "@customTypes/store";
import reducer, {
	initialState,
	projectsActs,
	ProjectsInitialState
} from "./projects.slice";

describe("project reducer should work properly", () => {
	test("should return the initial state", () => {
		expect(reducer(undefined, {type: undefined})).toEqual(initialState);
	});

	test("should set isLoading to true", () => {
		const previousState: ProjectsInitialState = {
			...initialState,
			isLoading: false
		};
		const payload = true;

		expect(reducer(previousState, projectsActs.setIsLoading(payload))).toEqual({
			...previousState,
			isLoading: payload
		});
	});

	test("should set isAddingToFavorites to true", () => {
		const previousState: ProjectsInitialState = {
			...initialState,
			isAddingToFavorites: false
		};
		const payload = true;

		expect(
			reducer(previousState, projectsActs.setIsAddingToFavorites(payload))
		).toEqual({
			...previousState,
			isAddingToFavorites: payload
		});
	});

	test("should set isLoadingMore to true", () => {
		const previousState: ProjectsInitialState = {
			...initialState,
			isLoadingMore: false
		};
		const payload = true;

		expect(
			reducer(previousState, projectsActs.setIsLoadingMore(payload))
		).toEqual({
			...previousState,
			isLoadingMore: payload
		});
	});

	test("should set total count to 10", () => {
		const previousState: ProjectsInitialState = {
			...initialState,
			totalCount: 0
		};
		const payload = 10;

		expect(reducer(previousState, projectsActs.setTotalCount(payload))).toEqual(
			{
				...previousState,
				totalCount: payload
			}
		);
	});

	test("should set page to 2", () => {
		const previousState: ProjectsInitialState = {
			...initialState,
			page: 1
		};
		const payload = 2;

		expect(reducer(previousState, projectsActs.setPage(payload))).toEqual({
			...previousState,
			page: payload
		});
	});

	test("should set search to project", () => {
		const previousState: ProjectsInitialState = {
			...initialState,
			search: ""
		};
		const payload = "project";

		expect(reducer(previousState, projectsActs.setSearch(payload))).toEqual({
			...previousState,
			search: payload
		});
	});

	test("should set projects array", () => {
		const previousState: ProjectsInitialState = {
			...initialState,
			projects: []
		};
		const payload: Project[] = [
			{
				_id: "1",
				workType: "default",
				description: "",
				budget: 0,
				creator: {avatar: "", username: "", createdDate: "", projectsCount: 0},
				createdDate: "",
				categories: [],
				title: ""
			}
		];

		expect(reducer(previousState, projectsActs.setProjects(payload))).toEqual({
			...previousState,
			projects: payload
		});
	});

	test("should add projects array", () => {
		const project: Project = {
			_id: "1",
			workType: "default",
			description: "",
			budget: 0,
			creator: {avatar: "", username: "", createdDate: "", projectsCount: 0},
			createdDate: "",
			categories: [],
			title: ""
		};

		const previousState: ProjectsInitialState = {
			...initialState,
			projects: [project]
		};

		const payload: Project[] = [
			{
				...project,
				_id: "2"
			}
		];

		expect(reducer(previousState, projectsActs.addProjects(payload))).toEqual({
			...previousState,
			projects: [...previousState.projects, ...payload]
		});
	});

	test("should set sort object", () => {
		const previousState: ProjectsInitialState = {
			...initialState,
			sort: {title: "Date", value: "createdDate", id: 1}
		};
		const payload: DropdownOption = {
			title: "Budget",
			value: "budget",
			id: 2
		};

		expect(reducer(previousState, projectsActs.setSort(payload))).toEqual({
			...previousState,
			sort: payload
		});
	});
});
