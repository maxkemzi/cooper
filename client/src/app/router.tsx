import {AuthPage} from "@pages/auth";
import {ContactPage} from "@pages/contact";
import {CreatePage} from "@pages/create";
import {EditProfilePage} from "@pages/editProfile";
import {FavoriteProjectsPage} from "@pages/favoriteProjects";
import {HomePage} from "@pages/home";
import {ProfilePage} from "@pages/profile";
import {ProjectPage} from "@pages/project";
import {ProjectsPage} from "@pages/projects";
import {YourProjectsPage} from "@pages/yourProjects";
import {RouteNames} from "@shared/constants";
import {Navigate, createBrowserRouter} from "react-router-dom";
import baseLayout from "./layouts/baseLayout";
import fullscreenLayout from "./layouts/fullscreenLayout";
import onlyLogoLayout from "./layouts/onlyLogoLayout";

const router = createBrowserRouter([
	{
		element: fullscreenLayout,
		errorElement: <div>error</div>,
		children: [
			{
				path: RouteNames.Home,
				element: <HomePage />
			}
		]
	},
	{
		element: onlyLogoLayout,
		errorElement: <div>error</div>,
		children: [
			{
				path: RouteNames.Signup,
				element: <AuthPage />
			},
			{
				path: RouteNames.Login,
				element: <AuthPage />
			}
		]
	},
	{
		element: baseLayout,
		errorElement: <div>error</div>,
		children: [
			{
				path: `${RouteNames.Projects}/:id`,
				element: <ProjectPage />
			},
			{
				path: RouteNames.Projects,
				element: <ProjectsPage />
			},
			{
				path: RouteNames.YourProjects,
				element: <YourProjectsPage />
			},
			{
				path: RouteNames.FavoriteProjects,
				element: <FavoriteProjectsPage />
			},
			{
				path: RouteNames.Create,
				element: <CreatePage />
			},
			{
				path: RouteNames.Contact,
				element: <ContactPage />
			},
			{
				path: `${RouteNames.Profile}/:username`,
				element: <ProfilePage />
			},
			{
				path: RouteNames.EditProfile,
				element: <EditProfilePage />
			}
		]
	},
	{path: "*", element: <Navigate to={RouteNames.Home} replace />}
]);

export default router;
