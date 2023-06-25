const selectIsAuth = (state: RootState) => state.authState.isAuth;

const selectAuthIsFetching = (state: RootState) => state.authState.isFetching;

export {selectAuthIsFetching, selectIsAuth};
