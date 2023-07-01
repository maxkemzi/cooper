import {IconType} from "react-icons";

type BrandLogoIconName = "instagram" | "telegram" | "github";
type StatusIconName = "error" | "info" | "warning" | "success";

type IconName =
	| BrandLogoIconName
	| StatusIconName
	| "search"
	| "close"
	| "add"
	| "caretDown"
	| "heart"
	| "location"
	| "eye"
	| "eyeOff";

type IconVariant = "solid" | "outline";

type ComponentVariants =
	| {solid?: IconType; outline: IconType}
	| {solid: IconType; outline?: IconType};

type IconComponents = {[key in IconName]: ComponentVariants};

export type {
	BrandLogoIconName,
	IconComponents,
	IconName,
	IconVariant,
	StatusIconName
};
