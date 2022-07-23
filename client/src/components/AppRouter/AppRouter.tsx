import useTypedSelector from "@hooks/useTypedSelector";
import {privateRoutes, publicRoutes} from "@routes/index";
import {getAuthIsAuth, getAuthIsLoading} from "@store/auth/auth.selectors";
import {HOME_ROUTE, PROJECTS_ROUTE} from "@utils/constants/routeNames";
import React, {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {LoaderWrapper} from "../Loader";
import Loader from "../Loader/Loader";

const AppRouter: FC = () => {
	const isAuth = useTypedSelector(getAuthIsAuth);
	const isLoading = useTypedSelector(getAuthIsLoading);

	if (isLoading) {
		return (
			<LoaderWrapper>
				<Loader />
			</LoaderWrapper>
		);
	}

	if (isAuth) {
		return (
			<Routes>
				{privateRoutes.map(({path, element}) => (
					<Route key={path} path={path} element={element} />
				))}
				<Route path="*" element={<Navigate to={PROJECTS_ROUTE} />} />
			</Routes>
		);
	}

	return (
		<Routes>
			{publicRoutes.map(({path, element}) => (
				<Route key={path} path={path} element={element} />
			))}
			<Route path="*" element={<Navigate to={HOME_ROUTE} />} />
		</Routes>
	);
};

export default AppRouter;
