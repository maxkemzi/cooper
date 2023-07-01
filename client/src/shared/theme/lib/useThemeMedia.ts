import {ScreenWidth} from "@shared/constants";
import {useWindowSize} from "@shared/lib";
import {useEffect, useState} from "react";
import {MediaSize} from "../types";

type Media = {[key in MediaSize]: boolean};

const useThemeMedia = (): Media => {
	const {width} = useWindowSize();
	const [media, setMedia] = useState<Media>(() => ({
		xs: width <= ScreenWidth.SM_PHONE,
		sm: width <= ScreenWidth.PHONE,
		md: width <= ScreenWidth.TABLET,
		lg: width <= ScreenWidth.SM_DESKTOP,
		xl: width <= ScreenWidth.DESKTOP
	}));

	useEffect(() => {
		setMedia({
			xs: width <= ScreenWidth.SM_PHONE,
			sm: width <= ScreenWidth.PHONE,
			md: width <= ScreenWidth.TABLET,
			lg: width <= ScreenWidth.SM_DESKTOP,
			xl: width <= ScreenWidth.DESKTOP
		});
	}, [width]);

	return media;
};

export default useThemeMedia;
