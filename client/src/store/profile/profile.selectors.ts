import {RootState} from "..";

export const getProfileIsLoading = (state: RootState) =>
	state.profileState.isLoading;

export const getProfileDesc = (state: RootState) =>
	state.profileState.profile.description;

export const getProfileLocation = (state: RootState) =>
	state.profileState.profile.location;

export const getProfileProjectsCount = (state: RootState) =>
	state.profileState.profile.projectsCount;

export const getProfileUsername = (state: RootState) =>
	state.profileState.profile.username;

export const getProfileFavorites = (state: RootState) =>
	state.profileState.profile.favorites;

export const getProfileAvatar = (state: RootState) =>
	state.profileState.profile.avatar;
