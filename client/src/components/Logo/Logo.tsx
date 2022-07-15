import React, {FC} from "react";
import {ReactComponent as LogoIcon} from "@images/logo/logo.svg";
import {HOME_ROUTE} from "@utils/constants/routeNames";
import LogoLink from "./Logo.styled";

interface LogoProps {
	linkPath?: string;
}

const Logo: FC<LogoProps> = ({linkPath = HOME_ROUTE}) => (
	<LogoLink aria-label="logo" to={linkPath}>
		<LogoIcon />
	</LogoLink>
);

export default Logo;
