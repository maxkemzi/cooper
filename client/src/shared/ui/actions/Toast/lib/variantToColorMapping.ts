import {Color, Variant} from "../types";

type VariantToColorMapping = {[key in Variant]: Color};

const variantToColorMapping: VariantToColorMapping = {
	error: "error",
	info: "info",
	success: "success",
	warning: "warning"
};

export default variantToColorMapping;
