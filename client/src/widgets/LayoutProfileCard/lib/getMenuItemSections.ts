import {RouteName} from "@shared/constants";

const getMenuItemSections = (username: string) => ({
	1: [
		{id: 1, text: "Your profile", path: `${RouteName.PROFILE}/${username}`},
		{id: 2, text: "Your projects", path: RouteName.YOUR_PROJECTS},
		{id: 3, text: "Your favorites", path: RouteName.FAVORITE_PROJECTS}
	],
	2: [
		{id: 1, text: "Create project", path: RouteName.CREATE},
		{id: 2, text: "Edit profile", path: RouteName.EDIT_PROFILE}
	]
});

export default getMenuItemSections;
