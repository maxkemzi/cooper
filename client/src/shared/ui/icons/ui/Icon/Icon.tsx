import {ColorName, ColorVariant, ThemingProps} from "@shared/theme";
import {FC} from "react";
import {IconBaseProps} from "react-icons";
import {useTheme} from "styled-components";
import getComponentByNameAndVariant from "../../lib/getComponentByNameAndVariant";
import {IconName, IconVariant} from "../../types";

type Color = Exclude<ColorName, "background" | "surface">;

interface Props extends ThemingProps, IconBaseProps {
	name: IconName;
	variant?: IconVariant;
	color?: Color;
	colorVariant?: ColorVariant;
}

const Icon: FC<Props> = ({
	name,
	variant = "outline",
	color = "textPrimary",
	colorVariant = "main",
	...rest
}) => {
	const theme = useTheme();

	const Component = getComponentByNameAndVariant(name, variant);

	if (!Component) {
		return null;
	}

	const iconColor = theme.colors[color][colorVariant];

	return <Component color={iconColor} {...rest} />;
};

export default Icon;
