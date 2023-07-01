import colorPalette from "./colorPalette";

const getCustomMediaQuery = (maxWidth: number) =>
	`@media (max-width: ${maxWidth}px)`;

const theme = {
	colors: {
		background: {
			main: colorPalette.white,
			contrast: colorPalette.jetBlack
		},
		surface: {
			main: colorPalette.pearlWhite,
			contrast: colorPalette.jetBlack
		},
		primary: {
			main: colorPalette.jetBlack,
			contrast: colorPalette.white
		},
		secondary: {
			main: colorPalette.midnightBlue,
			contrast: colorPalette.white
		},
		secondaryLight: {
			main: colorPalette.lavenderMist,
			contrast: colorPalette.white
		},
		error: {
			main: colorPalette.fieryRed,
			contrast: colorPalette.white
		},
		success: {
			main: colorPalette.green,
			contrast: colorPalette.white
		},
		warning: {
			main: colorPalette.amber,
			contrast: colorPalette.white
		},
		info: {
			main: colorPalette.blue,
			contrast: colorPalette.white
		},
		textPrimary: {
			main: colorPalette.jetBlack,
			contrast: colorPalette.white
		},
		textSecondary: {
			main: colorPalette.slateGray,
			contrast: colorPalette.white
		},
		disabled: {
			main: colorPalette.slateGray,
			contrast: colorPalette.white
		}
	},
	spacing: {
		auto: "auto",
		xs: "4px",
		sm: "8px",
		md: "16px",
		lg: "24px",
		xl: "32px",
		xxl: "48px",
		xxxl: "64px"
	},
	borderRadiuses: {
		main: "8px",
		full: "50px"
	},
	boxShadows: {
		main: "0px 4px 12px rgba(0, 0, 0, 0.25)"
	},
	fontFamilies: {
		montserrat: "Montserrat, sans-serif"
	},
	fontSizes: {
		xs: "12px",
		sm: "14px",
		md: "16px",
		lg: "20px",
		xl: "24px",
		xxl: "32px",
		xxxl: "40px",
		mega: "56px",
		ultramega: "72px"
	},
	fontWeights: {
		regular: 400,
		semiBold: 600,
		extraBold: 800
	},
	iconSizes: {
		xs: "16px",
		sm: "20px",
		md: "24px",
		lg: "36px"
	},
	avatarSizes: {
		sm: "40px",
		md: "100px",
		lg: "180px"
	},
	transitions: {
		fast: "0.3s ease-in-out",
		main: "0.4s ease-in-out",
		slow: "0.6s ease-in-out"
	},
	media: {
		xs: getCustomMediaQuery(380),
		sm: getCustomMediaQuery(480),
		md: getCustomMediaQuery(768),
		lg: getCustomMediaQuery(1024),
		xl: getCustomMediaQuery(1280),
		custom: getCustomMediaQuery
	}
};

type Coefficients = {
	spacing: number;
	fontSize: number;
};

const getThemeByCoeff = ({spacing, fontSize}: Coefficients): typeof theme => {
	const getValueByCoeff = (value: string, coeff: number) =>
		`${Math.round(parseInt(value, 10) * coeff)}px`;

	const getSpacing = (value: string) => getValueByCoeff(value, spacing);

	const getFontSize = (value: string) => getValueByCoeff(value, fontSize);

	const getIconSize = (value: string) => getValueByCoeff(value, fontSize);

	const getAvatarSize = (value: string) => getValueByCoeff(value, fontSize);

	return {
		...theme,
		spacing: {
			...theme.spacing,
			xs: getSpacing(theme.spacing.xs),
			sm: getSpacing(theme.spacing.sm),
			md: getSpacing(theme.spacing.md),
			lg: getSpacing(theme.spacing.lg),
			xl: getSpacing(theme.spacing.xl),
			xxl: getSpacing(theme.spacing.xxl),
			xxxl: getSpacing(theme.spacing.xxxl)
		},
		fontSizes: {
			...theme.fontSizes,
			xs: getFontSize(theme.fontSizes.xs),
			sm: getFontSize(theme.fontSizes.sm),
			md: getFontSize(theme.fontSizes.md),
			lg: getFontSize(theme.fontSizes.lg),
			xl: getFontSize(theme.fontSizes.xl),
			xxl: getFontSize(theme.fontSizes.xxl),
			xxxl: getFontSize(theme.fontSizes.xxxl),
			mega: getFontSize(theme.fontSizes.mega),
			ultramega: getFontSize(theme.fontSizes.ultramega)
		},
		iconSizes: {
			xs: getIconSize(theme.iconSizes.xs),
			sm: getIconSize(theme.iconSizes.sm),
			md: getIconSize(theme.iconSizes.md),
			lg: getIconSize(theme.iconSizes.lg)
		},
		avatarSizes: {
			sm: getAvatarSize(theme.avatarSizes.sm),
			md: getAvatarSize(theme.avatarSizes.md),
			lg: getAvatarSize(theme.avatarSizes.lg)
		}
	};
};

const tabletTheme = getThemeByCoeff({
	fontSize: 1,
	spacing: 0.8
});

const phoneTheme = getThemeByCoeff({
	fontSize: 0.9,
	spacing: 0.7
});

const smPhoneTheme = getThemeByCoeff({
	fontSize: 0.75,
	spacing: 0.7
});

export {phoneTheme, tabletTheme, smPhoneTheme};
export default theme;
