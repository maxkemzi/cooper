import {categoriesReducer} from "@entities/category";
import {profileReducer} from "@entities/profile";
import {projectReducer} from "@entities/project";
import {userReducer} from "@entities/user";
import {authReducer} from "@features/auth";
import {configureStore} from "@reduxjs/toolkit";
import {errorMiddleware, errorReducer} from "@shared/error";
import {redirectReducer} from "@shared/redirect";
import {toastReducer} from "@shared/toast";

const store = configureStore({
	reducer: {
		authState: authReducer,
		userState: userReducer,
		projectState: projectReducer,
		profileState: profileReducer,
		categoriesState: categoriesReducer,
		errorState: errorReducer,
		toastState: toastReducer,
		redirectState: redirectReducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().prepend(errorMiddleware)
});

export default store;
