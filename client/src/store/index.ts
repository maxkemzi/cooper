import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./app/app.slice";
import authSlice from "./auth/auth.slice";
import profileSlice from "./profile/profile.slice";
import projectsSlice from "./projects/projects.slice";
import projectSlice from "./project/project.slice";
import categoriesSlice from "./categories/categories.slice";

const store = configureStore({
	reducer: {
		appState: appSlice,
		authState: authSlice,
		projectsState: projectsSlice,
		projectState: projectSlice,
		profileState: profileSlice,
		categoriesState: categoriesSlice
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
