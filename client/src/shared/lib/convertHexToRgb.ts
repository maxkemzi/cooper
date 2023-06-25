import {Rgb} from "./types";

const convertHexToRgb = (hex: string): Rgb => {
	const hexWithoutHashtag = hex.replace("#", "");

	const r = parseInt(hexWithoutHashtag.substring(0, 2), 16);
	const g = parseInt(hexWithoutHashtag.substring(2, 4), 16);
	const b = parseInt(hexWithoutHashtag.substring(4, 6), 16);

	return {r, g, b};
};

export default convertHexToRgb;
