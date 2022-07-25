import {Project} from "@customTypes/entities";
import reducer, {
	initialState,
	projectActs,
	ProjectInitialState
} from "./project.slice";

describe("project reducer should work properly", () => {
	test("should return the initial state", () => {
		expect(reducer(undefined, {type: undefined})).toEqual(initialState);
	});

	test("should set isLoading to true", () => {
		const previousState: ProjectInitialState = {
			...initialState,
			isLoading: false
		};
		const payload = true;

		expect(reducer(previousState, projectActs.setIsLoading(payload))).toEqual({
			...previousState,
			isLoading: payload
		});
	});

	test("should set project object", () => {
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

		const previousState: ProjectInitialState = {
			...initialState,
			project
		};

		const payload: Project = {
			...project,
			title: "Project title"
		};

		expect(reducer(previousState, projectActs.setProject(payload))).toEqual({
			...previousState,
			project: payload
		});
	});
});
