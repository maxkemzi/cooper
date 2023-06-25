const selectUserUsername = (state: RootState) => state.userState.data?.username;

const selectUserFavoriteProjects = (state: RootState) =>
	state.userState.data?.favoriteProjects;

const selectUserEmail = (state: RootState) => state.userState.data?.email;

const selectUserDescription = (state: RootState) =>
	state.userState.data?.description;

const selectUserLocation = (state: RootState) => state.userState.data?.location;

const selectUserAvatar = (state: RootState) => state.userState.data?.avatar;

const selectIsAddingToFavorites = (state: RootState) =>
	state.userState.isAddingToFavorites;

const selectUser = (state: RootState) => state.userState.data;

export {
	selectUserAvatar,
	selectUserDescription,
	selectUserEmail,
	selectUserFavoriteProjects,
	selectUserLocation,
	selectUserUsername,
	selectUser,
	selectIsAddingToFavorites
};
