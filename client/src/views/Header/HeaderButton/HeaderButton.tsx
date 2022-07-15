import React from "react";
import {NavLink} from "react-router-dom";
import {SIGNUP_ROUTE} from "@utils/constants/routeNames";
import Button from "@components/Button/Button";

const HeaderBtn = () => (
	<NavLink to={SIGNUP_ROUTE}>
		<Button variant="outline">SIGN UP</Button>
	</NavLink>
);

export default HeaderBtn;
