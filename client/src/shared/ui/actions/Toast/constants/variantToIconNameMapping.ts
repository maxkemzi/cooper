import {IconName} from "../../../icons";
import {Variant} from "../types";

type VariantToIconNameMapping = {[key in Variant]: IconName};

const variantToIconNameMapping: VariantToIconNameMapping = {
	error: "error",
	info: "info",
	success: "success",
	warning: "warning"
};

export default variantToIconNameMapping;
