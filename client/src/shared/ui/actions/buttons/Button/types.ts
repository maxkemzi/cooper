import {ColorName} from "@shared/theme";

type As = "button" | "externalLink" | "routeLink";
type Variant = "solid" | "outline";
type Size = "sm" | "md" | "lg";
type Color = Extract<
	ColorName,
	"primary" | "secondary" | "success" | "error" | "info" | "warning"
>;

interface StyleProps {
	$variant: Variant;
	$size: Size;
	$color: Color;
}

export type {Color, Size, StyleProps, Variant, As};
