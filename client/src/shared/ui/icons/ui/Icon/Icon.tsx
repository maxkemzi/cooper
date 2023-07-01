import {
	ColorName,
	ColorVariant,
	IconSize,
	ThemingProps,
	useCommonStyleProps
} from "@shared/theme";
import {SVGProps, forwardRef} from "react";
import {useTheme} from "styled-components";
import iconComponents from "../../constants/iconComponents";
import getIconComponentsWithCommonStyles from "../../lib/getIconComponentsWithCommonStyles";
import {IconName, IconVariant} from "../../types";

type Color = Exclude<ColorName, "background" | "surface">;

interface Props extends ThemingProps, SVGProps<SVGSVGElement> {
	name: IconName;
	variant?: IconVariant;
	color?: Color;
	colorVariant?: ColorVariant;
	size?: IconSize;
}

const styledIconComponents = getIconComponentsWithCommonStyles(iconComponents);

const Icon = forwardRef<SVGSVGElement, Props>((props, ref) => {
	const {
		name,
		variant = "outline",
		color = "textPrimary",
		colorVariant = "main",
		size = "sm",
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	const theme = useTheme();

	const iconColor = theme.colors[color][colorVariant];
	const iconSize = theme.iconSizes[size];

	const Component = styledIconComponents[name][variant];

	if (!Component) {
		return null;
	}

	return (
		<Component
			ref={ref}
			size={iconSize}
			color={iconColor}
			{...commonStyleProps}
			{...rest}
		/>
	);
});

export default Icon;
