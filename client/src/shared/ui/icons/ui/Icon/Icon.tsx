import {
	ColorName,
	ColorVariant,
	IconSize,
	ThemingProps,
	useCommonStyleProps
} from "@shared/theme";
import {HTMLAttributes, SVGProps as SVGPropsType, forwardRef} from "react";
import {useTheme} from "styled-components";
import iconComponents from "../../constants/iconComponents";
import {IconName, IconVariant} from "../../types";
import {Wrapper} from "./Icon.styled";

type Color = Exclude<ColorName, "background" | "surface">;

interface Props extends ThemingProps, HTMLAttributes<HTMLDivElement> {
	name: IconName;
	variant?: IconVariant;
	color?: Color;
	colorVariant?: ColorVariant;
	size?: IconSize;
	SVGProps?: SVGPropsType<SVGSVGElement>;
}

const Icon = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		name,
		SVGProps,
		variant = "outline",
		color = "textPrimary",
		colorVariant = "main",
		size = "sm",
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);
	const theme = useTheme();

	const Component = iconComponents[name][variant];
	if (!Component) {
		return null;
	}

	const iconSize = theme.iconSizes[size];
	const iconColor = theme.colors[color][colorVariant];

	return (
		<Wrapper ref={ref} {...commonStyleProps} {...rest}>
			<Component size={iconSize} color={iconColor} {...SVGProps} />
		</Wrapper>
	);
});

export default Icon;
