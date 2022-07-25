import {Category} from "@customTypes/entities";
import reducer, {
	categoriesActs,
	CategoriesInitialState,
	initialState
} from "./categories.slice";

describe("categories reducer should work properly", () => {
	test("should return the initial state", () => {
		expect(reducer(undefined, {type: undefined})).toEqual(initialState);
	});

	test("should set isLoading to true", () => {
		const previousState: CategoriesInitialState = {
			...initialState,
			isLoading: false
		};
		const payload = true;

		expect(
			reducer(previousState, categoriesActs.setIsLoading(payload))
		).toEqual({
			...previousState,
			isLoading: payload
		});
	});

	test("should set categories array", () => {
		const previousState: CategoriesInitialState = {
			...initialState,
			categories: []
		};
		const payload: Category[] = [{name: "Programming", _id: "1"}];

		expect(
			reducer(previousState, categoriesActs.setCategories(payload))
		).toEqual({
			...previousState,
			categories: payload
		});
	});
});
