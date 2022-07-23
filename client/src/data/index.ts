import {
	ABOUT_ME_ROUTE,
	HOME_ROUTE,
	PROJECTS_ROUTE
} from "@utils/constants/routeNames";

interface NavbarDataItem {
	id: number;
	text: string;
	path: string;
}

interface DropdownOptionDataItem {
	id: number;
	title: string;
	value: string;
}

export const projectsDropdownItems: DropdownOptionDataItem[] = [
	{id: 1, title: "Date", value: "createdDate"},
	{id: 2, title: "Budget", value: "budget"}
];

export const headerNavbarItems: NavbarDataItem[] = [
	{id: 1, text: "Home", path: HOME_ROUTE},
	{id: 2, text: "Projects", path: PROJECTS_ROUTE},
	{id: 3, text: "Idea & contact", path: ABOUT_ME_ROUTE}
];
