import {ScreenWidth} from "@shared/constants";
import {useWindowSize} from "@shared/lib";
import {FC, PropsWithChildren, useMemo} from "react";
import {ThemeProvider} from "styled-components";
import defaultTheme, {
	phoneTheme,
	smPhoneTheme,
	tabletTheme
} from "../constants/theme";

const AppThemeProvider: FC<PropsWithChildren> = ({children}) => {
	const {width} = useWindowSize();
	const theme = useMemo(() => {
		if (width <= ScreenWidth.SM_PHONE) {
			return smPhoneTheme;
		}

		if (width <= ScreenWidth.PHONE) {
			return phoneTheme;
		}

		if (width <= ScreenWidth.TABLET) {
			return tabletTheme;
		}

		return defaultTheme;
	}, [width]);

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
