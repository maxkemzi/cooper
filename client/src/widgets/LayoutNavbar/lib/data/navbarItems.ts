import {RouteName} from "@shared/constants";
import {NavbarItem} from "./types";

const navbarItems: NavbarItem[] = [
	{id: 1, text: "Home", path: RouteName.HOME},
	{id: 2, text: "Projects", path: RouteName.PROJECTS},
	{id: 3, text: "Idea & contact", path: RouteName.CONTACT}
];

export default navbarItems;
