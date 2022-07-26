import {User} from "@customTypes/entities";
import reducer, {
	initialState,
	profileActs,
	ProfileInitialState
} from "./profile.slice";

describe("profile reducer should work properly", () => {
	test("should return the initial state", () => {
		expect(reducer(undefined, {type: undefined})).toEqual(initialState);
	});

	test("should set isLoading to true", () => {
		const previousState: ProfileInitialState = {
			...initialState,
			isLoading: false
		};
		const payload = true;

		expect(reducer(previousState, profileActs.setIsLoading(payload))).toEqual({
			...previousState,
			isLoading: payload
		});
	});

	test("should set profile object", () => {
		const profile: User = {
			email: "",
			location: "",
			avatar: "",
			_id: "1",
			description: "",
			isActivated: false,
			projectsCount: 0,
			favorites: [],
			username: ""
		};

		const previousState: ProfileInitialState = {
			...initialState,
			profile
		};

		const payload: User = {
			...profile,
			username: "maxkemzi"
		};

		expect(reducer(previousState, profileActs.setProfile(payload))).toEqual({
			...previousState,
			profile: payload
		});
	});
});
