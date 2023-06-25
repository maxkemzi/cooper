import {FC, memo} from "react";
import {RouteNames} from "@shared/constants";
import {useWindowSize} from "@shared/lib";
import {LogoLink} from "./Logo.styled";
import LogoMobileIcon from "../LogoMobileIcon/LogoMobileIcon";
import LogoIcon from "../LogoIcon/LogoIcon";

interface Props {
	linkPath?: string;
}

const Logo: FC<Props> = memo(({linkPath = RouteNames.Home}) => {
	const {width} = useWindowSize();

	return (
		<LogoLink aria-label="logo" to={linkPath}>
			{width <= 1024 ? <LogoMobileIcon /> : <LogoIcon />}
		</LogoLink>
	);
});

export default Logo;
