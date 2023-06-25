import {IconType} from "react-icons";
import iconComponents from "../constants/iconComponents";
import {IconName, IconVariant} from "../types";

const getComponentByNameAndVariant = (
	name: IconName,
	variant: IconVariant
): IconType | null => {
	const componentVariants = iconComponents[name];

	if (componentVariants) {
		const Component = componentVariants[variant];

		if (Component) {
			return Component;
		}
	}

	return null;
};

export default getComponentByNameAndVariant;
