import {IDropdownOption, INavbarItem} from "@customTypes/index";
import {
	ABOUT_ME_ROUTE,
	HOME_ROUTE,
	PROJECTS_ROUTE
} from "@utils/constants/routeNames";

export const projectsDropdownItems: IDropdownOption[] = [
	{id: 1, title: "Date", value: "createdDate"},
	{id: 2, title: "Budget", value: "budget"}
];

export const headerNavbarItems: INavbarItem[] = [
	{id: 1, text: "Home", path: HOME_ROUTE},
	{id: 2, text: "Projects", path: PROJECTS_ROUTE},
	{id: 3, text: "Idea & contact", path: ABOUT_ME_ROUTE}
];
