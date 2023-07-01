import {withCommonStyles} from "@shared/theme";
import {IconComponents} from "../types";

const getIconComponentsWithCommonStyles = (
	iconComponents: IconComponents
): IconComponents => {
	const styledIconComponents: IconComponents = {...iconComponents};

	Object.entries(iconComponents).forEach(([name, variants]) => {
		const styledVariants: (typeof iconComponents)[keyof typeof iconComponents] =
			{...variants};

		Object.entries(variants).forEach(([variant, Component]) => {
			styledVariants[variant as keyof typeof variants] =
				withCommonStyles(Component);
		});

		styledIconComponents[name as keyof typeof iconComponents] = styledVariants;
	});

	return styledIconComponents;
};

export default getIconComponentsWithCommonStyles;
