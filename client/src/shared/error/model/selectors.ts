const selectErrorMessage = (state: RootState) => state.errorState.errorMessage;
const selectHasError = (state: RootState) => state.errorState.hasError;

export {selectErrorMessage, selectHasError};
