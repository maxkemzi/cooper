import {theme} from "@shared/theme";
import store from "./store";

declare global {
	type RootState = ReturnType<typeof store.getState>;
	type RootDispatch = typeof store.dispatch;
	type OmitDistributive<T, K extends keyof any> = T extends any
		? Omit<T, K>
		: never;
}

declare module "styled-components" {
	type Theme = typeof theme;
	export interface DefaultTheme extends Theme {}
}
