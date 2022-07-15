import Container from "@components/Container/Container";
import useTypedSelector from "@hooks/useTypedSelector";
import {HOME_ROUTE, PROJECTS_ROUTE} from "@utils/constants/routeNames";
import {privateRoutes, publicRoutes} from "@utils/constants/routes";
import Header from "@views/Header/Header";
import React, {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {LoaderWrapper} from "../Loader";
import Loader from "../Loader/Loader";

const AppRouter: FC = () => {
	const isAuth = useTypedSelector(state => state.authState.isAuth);
	const isLoading = useTypedSelector(state => state.authState.isLoading);

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
				{privateRoutes.map(
					({path, element, hasHeader = true, isHeaderAbsolute = true}) => (
						<Route
							key={path}
							path={path}
							element={
								<>
									{hasHeader && <Header isAbsolute={isHeaderAbsolute} />}
									<main>
										<Container>{element}</Container>
									</main>
								</>
							}
						/>
					)
				)}
				<Route path="*" element={<Navigate to={PROJECTS_ROUTE} />} />
			</Routes>
		);
	}

	return (
		<Routes>
			{publicRoutes.map(
				({path, element, hasHeader = true, isHeaderAbsolute = true}) => (
					<Route
						key={path}
						path={path}
						element={
							<>
								{hasHeader && <Header isAbsolute={isHeaderAbsolute} />}
								<main>
									<Container>{element}</Container>
								</main>
							</>
						}
					/>
				)
			)}
			<Route path="*" element={<Navigate to={HOME_ROUTE} />} />
		</Routes>
	);
};

export default AppRouter;
