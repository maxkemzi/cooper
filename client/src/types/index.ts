import {FC, ReactNode} from "react";

type Id = number;

export interface IUser {
	email: string;
	username: string;
	id?: Id;
	description: string;
	avatar: string;
	isActivated: boolean;
	location: string;
	projectsCount: number;
	saves: [];
}

export interface IProject {
	_id?: Id;
	workType: string;
	budget: number;
	skills: ISkill[];
	title: string;
	description: string;
	creator: {
		avatar: string;
		username: string;
		projectsCount: number;
		createdDate: string;
	};
	date: string;
	createdDate: string;
}

export interface IToast {
	id?: Id;
	text: string;
	icon: string;
}

export interface IDropdownOption {
	id?: Id;
	title: string;
	value: string;
}

export interface ISuggestion {
	id?: Id;
	mainText: string;
	secondaryText: string;
}

export interface ISocial {
	icon: FC;
	path: string;
}

export interface ISkill {
	id: number;
	name: string;
}

export interface Theme {
	colors: {
		light: string;
		danger: string;
		accent: string;
		accentLight: string;
		dark: string;
		darkLight: string;
		darkLighter: string;
	};
	fontSizeBase: string;
	fontFamilyBase: string;
	borderRadius: string;
	borderRadiusSmaller: string;
	transitionBase: string;
	boxShadowBase: string;
}

export interface MarginProps {
	marginBottom?: string;
	marginTop?: string;
	marginLeft?: string;
	marginRight?: string;
}

export interface INavbarItem {
	path: string;
	text: ReactNode;
	id?: string | number;
}

export type ToastPosition =
	| "top-right"
	| "top-left"
	| "bottom-right"
	| "bottom-left";
