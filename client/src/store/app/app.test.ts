import reducer, {
	appActs,
	AppInitialState,
	initialState,
	NotificationType
} from "./app.slice";

describe("auth reducer should work properly", () => {
	test("should return the initial state", () => {
		expect(reducer(undefined, {type: undefined})).toEqual(initialState);
	});

	test("should set notification object", () => {
		const previousState: AppInitialState = {
			...initialState,
			notification: {text: "", type: "info"}
		};
		const payload: {text: string; type: NotificationType} = {
			text: "Something went wrong.",
			type: "danger"
		};

		expect(reducer(previousState, appActs.setNotification(payload))).toEqual({
			...previousState,
			notification: payload
		});
	});

	test("should set toastList", () => {
		const previousState: AppInitialState = {
			...initialState,
			toastList: []
		};
		const payload = [{id: 1, text: "text", icon: "icon"}];

		expect(reducer(previousState, appActs.setToastList(payload))).toEqual({
			...previousState,
			toastList: payload
		});
	});

	test("should add toast to toastList", () => {
		const previousState: AppInitialState = {
			...initialState,
			toastList: []
		};
		const payload = {id: 1, text: "text", icon: "icon"};

		expect(reducer(previousState, appActs.addToast(payload))).toEqual({
			...previousState,
			toastList: [...previousState.toastList, payload]
		});
	});

	test("should delete toast from toastList", () => {
		const previousState: AppInitialState = {
			...initialState,
			toastList: [{id: 1, text: "text", icon: "icon"}]
		};
		const payload = 1;

		expect(reducer(previousState, appActs.deleteToast(payload))).toEqual({
			...previousState,
			toastList: previousState.toastList.filter(toast => toast.id !== payload)
		});
	});
});
