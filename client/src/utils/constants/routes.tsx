import React, {ReactNode} from "react";
import {
	ABOUT_ME_ROUTE,
	CREATE_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	PROFILE_ROUTE,
	PROJECT_ROUTE,
	PROJECTS_ROUTE,
	SIGNUP_ROUTE,
	YOUR_PROFILE_ROUTE,
	YOUR_PROJECTS_ROUTE
} from "@utils/constants/routeNames";
import ProjectsPage from "@views/Projects/ProjectsPage/ProjectsPage";
import ProjectPage from "@views/Project/ProjectPage/ProjectPage";
import AuthPage from "@views/Auth/AuthPage/AuthPage";
import CreatePage from "@views/Create/CreatePage/CreatePage";
import ProfilePage from "@views/Profile/ProfilePage/ProfilePage";
import AboutMePage from "@views/AboutMe/AboutMePage/AboutMePage";
import HomePage from "@views/Home/HomePage/HomePage";

interface IRoute {
	path: string;
	element: ReactNode;
	isHeaderAbsolute?: boolean;
	hasHeader?: boolean;
}

export const privateRoutes: IRoute[] = [
	{path: PROJECTS_ROUTE, element: <ProjectsPage />, isHeaderAbsolute: false},
	{path: PROJECT_ROUTE, element: <ProjectPage />, isHeaderAbsolute: false},
	{path: LOGIN_ROUTE, element: <AuthPage />, hasHeader: false},
	{path: SIGNUP_ROUTE, element: <AuthPage />, hasHeader: false},
	{
		path: YOUR_PROJECTS_ROUTE,
		element: <ProjectsPage />,
		isHeaderAbsolute: false
	},
	{path: CREATE_ROUTE, element: <CreatePage />, isHeaderAbsolute: false},
	{path: YOUR_PROFILE_ROUTE, element: <ProfilePage />},
	{path: ABOUT_ME_ROUTE, element: <AboutMePage />},
	{path: PROFILE_ROUTE, element: <ProfilePage />, isHeaderAbsolute: false},
	{path: HOME_ROUTE, element: <HomePage />}
];

export const publicRoutes: IRoute[] = [
	{path: LOGIN_ROUTE, element: <AuthPage />, hasHeader: false},
	{path: SIGNUP_ROUTE, element: <AuthPage />, hasHeader: false},
	{path: HOME_ROUTE, element: <HomePage />}
];
