const selectErrorMessage = (state: RootState) => state.errorState.errorMessage;
const selectHasError = (state: RootState) => state.errorState.hasError;

// eslint-disable-next-line import/prefer-default-export
export {selectErrorMessage, selectHasError};
