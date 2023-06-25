const selectProfileIsFetching = (state: RootState) =>
	state.profileState.isFetching;

const selectProfileDescription = (state: RootState) =>
	state.profileState.data?.description;

const selectProfileLocation = (state: RootState) =>
	state.profileState.data?.location;

const selectProfileUsername = (state: RootState) =>
	state.profileState.data?.username;

const selectProfileAvatar = (state: RootState) =>
	state.profileState.data?.avatar;

const selectProfile = (state: RootState) => state.profileState.data;

export {
	selectProfile,
	selectProfileAvatar,
	selectProfileDescription,
	selectProfileLocation,
	selectProfileUsername,
	selectProfileIsFetching
};
