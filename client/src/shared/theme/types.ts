import {DefaultTheme} from "styled-components";

type SpacingSize = keyof DefaultTheme["spacing"];
type MediaSize = Exclude<keyof DefaultTheme["media"], "custom">;
type IconSize = keyof DefaultTheme["iconSizes"];
type AvatarSize = keyof DefaultTheme["avatarSizes"];

type ColorName = keyof DefaultTheme["colors"];
type ColorVariant = keyof DefaultTheme["colors"][ColorName];
type ColorVariants = {[key in ColorVariant]: string};

type ConvertPropsToTransient<T extends object> = {
	[K in keyof T as `$${string & K}`]: T[K];
};

type MarginProp = "mt" | "mb" | "ml" | "mr" | "m";
type MarginProps = {[key in MarginProp]?: SpacingSize};

type PaddingProp = "pt" | "pb" | "pl" | "pr" | "p";
type PaddingProps = {[key in PaddingProp]?: SpacingSize};

type MarginTransientProps = ConvertPropsToTransient<MarginProps>;
type PaddingTransientProps = ConvertPropsToTransient<PaddingProps>;
type CommonStyleProps = MarginTransientProps & PaddingTransientProps;

type ThemingProps = MarginProps & PaddingProps;

export type {
	IconSize,
	ThemingProps,
	MarginProps,
	MediaSize,
	ColorName,
	ColorVariant,
	SpacingSize,
	ColorVariants,
	MarginTransientProps,
	PaddingTransientProps,
	CommonStyleProps,
	ConvertPropsToTransient,
	AvatarSize
};
