import {RouteNames} from "@shared/constants";
import {NavbarItem} from "./types";

const navbarItems: NavbarItem[] = [
	{id: 1, text: "Home", path: RouteNames.Home},
	{id: 2, text: "Projects", path: RouteNames.Projects},
	{id: 3, text: "Idea & contact", path: RouteNames.Contact}
];

export default navbarItems;
