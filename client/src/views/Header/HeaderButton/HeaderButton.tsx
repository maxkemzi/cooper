import Button from "@components/Button/Button";
import useWindowSize from "@hooks/useWindowSize";
import {SIGNUP_ROUTE} from "@utils/constants/routeNames";
import ScreenSizes from "@utils/constants/screenSizes";
import React, {memo} from "react";
import {NavLink} from "react-router-dom";

const HeaderBtn = memo(() => {
	const {width} = useWindowSize();
	return (
		<NavLink to={SIGNUP_ROUTE}>
			<Button
				size={width <= ScreenSizes.TabletWidth ? "small" : "medium"}
				variant="outline"
			>
				SIGN UP
			</Button>
		</NavLink>
	);
});

export default HeaderBtn;
