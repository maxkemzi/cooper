export interface Theme {
	colors: {
		light: string;
		danger: string;
		accent: string;
		accentLight: string;
		dark: string;
		darkLight: string;
		darkLighter: string;
	};
	fontSizeBase: string;
	fontFamilyBase: string;
	borderRadius: string;
	borderRadiusSmaller: string;
	transitionBase: string;
	boxShadowBase: string;
}

export interface MarginProps {
	marginBottom?: string;
	marginTop?: string;
	marginLeft?: string;
	marginRight?: string;
}
