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
		xxxl: "48px",
		mega: "64px",
		ultramega: "96px"
	},
	fontWeights: {
		regular: 400,
		semiBold: 600,
		extraBold: 800
	},
	transitions: {
		fast: "0.3s ease-in-out",
		main: "0.4s ease-in-out",
		slow: "0.6s ease-in-out"
	},
	media: {
		xs: getCustomMediaQuery(320),
		sm: getCustomMediaQuery(480),
		md: getCustomMediaQuery(768),
		lg: getCustomMediaQuery(992),
		xl: getCustomMediaQuery(1024),
		xxl: getCustomMediaQuery(1280),
		custom: getCustomMediaQuery
	}
};

export default theme;
