import {RootState} from "..";

export const getAuthIsAuth = (state: RootState) => state.authState.isAuth;

export const getAuthIsLoading = (state: RootState) => state.authState.isLoading;

export const getAuthUserUsername = (state: RootState) =>
	state.authState.user.username;

export const getAuthUserSaves = (state: RootState) =>
	state.authState.user.saves;

export const getAuthUserEmail = (state: RootState) =>
	state.authState.user.email;

export const getAuthUserDesc = (state: RootState) =>
	state.authState.user.description;

export const getAuthUserLocation = (state: RootState) =>
	state.authState.user.location;

export const getAuthUserAvatar = (state: RootState) =>
	state.authState.user.avatar;
