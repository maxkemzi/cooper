import {RootState} from "..";

export const getAppToastList = (state: RootState) => state.appState.toastList;

export const getAppNotification = (state: RootState) =>
	state.appState.notification;
