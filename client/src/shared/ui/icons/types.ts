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

export type {IconName, IconVariant, BrandLogoIconName, StatusIconName};
