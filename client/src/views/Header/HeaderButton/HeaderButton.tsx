import Button from "@components/Button/Button";
import useWindowSize from "@hooks/useWindowSize";
import {SIGNUP_ROUTE} from "@utils/constants/routeNames";
import React, {memo} from "react";
import {NavLink} from "react-router-dom";

const HeaderBtn = memo(() => {
	const {width} = useWindowSize();
	return (
		<NavLink to={SIGNUP_ROUTE}>
			<Button size={width <= 768 ? "small" : "medium"} variant="outline">
				SIGN UP
			</Button>
		</NavLink>
	);
});

export default HeaderBtn;
