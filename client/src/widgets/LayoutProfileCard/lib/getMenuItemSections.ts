import {RouteNames} from "@shared/constants";

const getMenuItemSections = (username: string) => ({
	1: [
		{id: 1, text: "Your profile", path: `${RouteNames.Profile}/${username}`},
		{id: 2, text: "Your projects", path: RouteNames.YourProjects},
		{id: 3, text: "Your favorites", path: RouteNames.FavoriteProjects}
	],
	2: [
		{id: 1, text: "Create project", path: RouteNames.Create},
		{id: 2, text: "Edit profile", path: RouteNames.EditProfile}
	]
});

export default getMenuItemSections;
