import useWindowSize from "@hooks/useWindowSize";
import {ReactComponent as LogoIcon} from "@images/logo/logo.svg";
import {ReactComponent as LogoMobileIcon} from "@images/logo/logo-mobile.svg";
import {HOME_ROUTE} from "@utils/constants/routeNames";
import React, {FC, memo} from "react";
import LogoLink from "./Logo.styled";

interface LogoProps {
	linkPath?: string;
}

const Logo: FC<LogoProps> = memo(({linkPath = HOME_ROUTE}) => {
	const {width} = useWindowSize();

	return (
		<LogoLink aria-label="logo" to={linkPath}>
			{width <= 1024 ? <LogoMobileIcon /> : <LogoIcon />}
		</LogoLink>
	);
});

export default Logo;
