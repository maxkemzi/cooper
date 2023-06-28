import {ColorName, ColorVariant} from "@shared/theme";

type Variant =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "subtitle1"
	| "subtitle2"
	| "body1"
	| "body2"
	| "button"
	| "link"
	| "highlight"
	| "inherit";

type Color = Exclude<ColorName, "background" | "surface"> | "inherit";

type TextTransform = "uppercase" | "lowercase" | "capitalize";

interface StyleProps {
	$variant: Variant;
	$color: Color;
	$colorVariant: ColorVariant;
	$noWrap?: boolean;
	$textTransform?: TextTransform;
}

export type {Color, StyleProps, TextTransform, Variant};
