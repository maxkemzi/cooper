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
import {RouteName} from "@shared/constants";
import {RedirectProvider} from "@shared/redirect";
import {Navigate, createBrowserRouter} from "react-router-dom";
import baseLayout from "./layouts/baseLayout";
import fullscreenLayout from "./layouts/fullscreenLayout";
import onlyLogoLayout from "./layouts/onlyLogoLayout";

const router = createBrowserRouter([
	{
		element: <RedirectProvider />,
		children: [
			{
				element: fullscreenLayout,
				errorElement: <div>error</div>,
				children: [
					{
						path: RouteName.HOME,
						element: <HomePage />
					}
				]
			},
			{
				element: onlyLogoLayout,
				errorElement: <div>error</div>,
				children: [
					{
						path: RouteName.SIGNUP,
						element: <AuthPage />
					},
					{
						path: RouteName.LOGIN,
						element: <AuthPage />
					}
				]
			},
			{
				element: baseLayout,
				errorElement: <div>error</div>,
				children: [
					{
						path: `${RouteName.PROJECTS}/:id`,
						element: <ProjectPage />
					},
					{
						path: RouteName.PROJECTS,
						element: <ProjectsPage />
					},
					{
						path: RouteName.YOUR_PROJECTS,
						element: <YourProjectsPage />
					},
					{
						path: RouteName.FAVORITE_PROJECTS,
						element: <FavoriteProjectsPage />
					},
					{
						path: RouteName.CREATE,
						element: <CreatePage />
					},
					{
						path: RouteName.CONTACT,
						element: <ContactPage />
					},
					{
						path: `${RouteName.PROFILE}/:username`,
						element: <ProfilePage />
					},
					{
						path: RouteName.EDIT_PROFILE,
						element: <EditProfilePage />
					}
				]
			},
			{path: "*", element: <Navigate to={RouteName.HOME} replace />}
		]
	}
]);

export default router;
