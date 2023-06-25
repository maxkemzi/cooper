import {ElementType} from "react";
import {Variant} from "../types";

const variantElementMapping: {
	[key in Variant]: ElementType;
} = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	subtitle1: "h6",
	subtitle2: "h6",
	body1: "p",
	body2: "p",
	button: "span",
	link: "span",
	highlight: "span",
	inherit: "p"
};

export default variantElementMapping;
