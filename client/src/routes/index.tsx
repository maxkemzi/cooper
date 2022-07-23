import {
	ABOUT_ME_ROUTE,
	CREATE_ROUTE,
	EDIT_PROFILE_ROUTE,
	FAVORITE_PROJECTS_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	PROFILE_ROUTE,
	PROJECTS_ROUTE,
	PROJECT_ROUTE,
	SIGNUP_ROUTE,
	YOUR_PROJECTS_ROUTE
} from "@utils/constants/routeNames";
import AboutMePage from "@views/AboutMe/AboutMePage/AboutMePage";
import AuthPage from "@views/Auth/AuthPage/AuthPage";
import CreatePage from "@views/Create/CreatePage/CreatePage";
import EditProfilePage from "@views/EditProfile/EditProfilePage/EditProfilePage";
import HomePage from "@views/Home/HomePage/HomePage";
import ProfilePage from "@views/Profile/ProfilePage/ProfilePage";
import ProjectPage from "@views/Project/ProjectPage/ProjectPage";
import ProjectsPage from "@views/Projects/ProjectsPage/ProjectsPage";
import React, {ReactNode} from "react";

interface IRoute {
	path: string;
	element: ReactNode;
}

export const privateRoutes: IRoute[] = [
	{path: PROJECTS_ROUTE, element: <ProjectsPage />},
	{path: PROJECT_ROUTE, element: <ProjectPage />},
	{path: LOGIN_ROUTE, element: <AuthPage />},
	{path: SIGNUP_ROUTE, element: <AuthPage />},
	{
		path: YOUR_PROJECTS_ROUTE,
		element: <ProjectsPage />
	},
	{
		path: FAVORITE_PROJECTS_ROUTE,
		element: <ProjectsPage />
	},
	{path: CREATE_ROUTE, element: <CreatePage />},
	{
		path: EDIT_PROFILE_ROUTE,
		element: <EditProfilePage />
	},
	{path: ABOUT_ME_ROUTE, element: <AboutMePage />},
	{
		path: `${PROFILE_ROUTE}/:username`,
		element: <ProfilePage />
	},
	{path: HOME_ROUTE, element: <HomePage />}
];

export const publicRoutes: IRoute[] = [
	{path: PROJECTS_ROUTE, element: <ProjectsPage />},
	{path: PROJECT_ROUTE, element: <ProjectPage />},
	{path: LOGIN_ROUTE, element: <AuthPage />},
	{path: SIGNUP_ROUTE, element: <AuthPage />},
	{path: ABOUT_ME_ROUTE, element: <AboutMePage />},
	{
		path: `${PROFILE_ROUTE}/:username`,
		element: <ProfilePage />
	},
	{path: HOME_ROUTE, element: <HomePage />}
];
