import {ColorName} from "@shared/theme";

type Variant = "success" | "error" | "warning" | "info";
interface Toast {
	message: string;
	variant: Variant;
}

type Color = Exclude<ColorName, "background" | "surface">;

export type {Toast, Variant, Color};
