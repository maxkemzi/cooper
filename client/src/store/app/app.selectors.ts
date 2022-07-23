import {RootState} from "..";

export const getAppToastList = (state: RootState) => state.appState.toastList;

export const getAppError = (state: RootState) => state.appState.error;
