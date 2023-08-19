import {RouteName} from "@shared/constants";
import {AuthForm} from "@widgets/AuthForm";
import {FC, useMemo} from "react";
import {useLocation} from "react-router-dom";
import {Wrapper} from "./Page.styled";

const Page: FC = () => {
	const location = useLocation();
	const currentlyOnLoginRoute = useMemo(
		() => location.pathname === RouteName.LOGIN,
		[location.pathname]
	);

	return (
		<Wrapper>
			<AuthForm isLogin={currentlyOnLoginRoute} />
		</Wrapper>
	);
};

export default Page;
