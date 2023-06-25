import colorString from "color-string";

class ColorManipulator {
	static toRgbaString(color: string, alpha: number) {
		const {r, g, b} = ColorManipulator.toRgba(color);
		return colorString.to.rgb([r, g, b], alpha);
	}

	static toRgbString(color: string) {
		const {r, g, b} = ColorManipulator.toRgba(color);
		return colorString.to.rgb([r, g, b]);
	}

	private static toRgba(color: string) {
		const [r, g, b, a] = colorString.get.rgb(color);
		return {r, g, b, a};
	}
}

export default ColorManipulator;
