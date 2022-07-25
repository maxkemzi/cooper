import {User} from "@customTypes/entities";
import reducer, {authActs, AuthInitialState, initialState} from "./auth.slice";

describe("auth reducer should work properly", () => {
	test("should return the initial state", () => {
		expect(reducer(undefined, {type: undefined})).toEqual(initialState);
	});

	test("should set isLoading to true", () => {
		const previousState: AuthInitialState = {
			...initialState,
			isLoading: false
		};
		const payload = true;

		expect(reducer(previousState, authActs.setIsLoading(payload))).toEqual({
			...previousState,
			isLoading: payload
		});
	});

	test("should set isAuth to true", () => {
		const previousState: AuthInitialState = {
			...initialState,
			isAuth: false
		};
		const payload = true;

		expect(reducer(previousState, authActs.setIsAuth(payload))).toEqual({
			...previousState,
			isAuth: payload
		});
	});

	test("should set a user object", () => {
		const previousState: AuthInitialState = {
			...initialState,
			user: {
				email: "",
				location: "",
				avatar: "",
				_id: "1",
				description: "",
				isActivated: false,
				projectsCount: 0,
				saves: [],
				username: ""
			}
		};
		const payload: User = {
			email: "",
			location: "",
			avatar: "",
			_id: "1",
			description: "",
			isActivated: false,
			projectsCount: 0,
			saves: [],
			username: "maxkemzi"
		};

		expect(reducer(previousState, authActs.setUser(payload))).toEqual({
			...previousState,
			user: payload
		});
	});
});
