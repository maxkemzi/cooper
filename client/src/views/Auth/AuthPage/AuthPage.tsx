import React, {FC, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {
	AuthContent,
	StyledAuthPage
} from "@views/Auth/AuthPage/AuthPage.styled";
import {LOGIN_ROUTE} from "@utils/constants/routeNames";
import AuthLoginForm from "@views/Auth/AuthLoginForm/AuthLoginForm";
import AuthSignupForm from "@views/Auth/AuthSignupForm/AuthSignupForm";

const AuthPage: FC = () => {
	const [isLogin, setIsLogin] = useState(false);
	const [withUsername, setWithUsername] = useState(false);
	const location = useLocation();

	const loadAsyncScript = (src: string) =>
		new Promise(resolve => {
			const script = document.createElement("script");
			Object.assign(script, {
				type: "text/javascript",
				async: true,
				src
			});
			script.addEventListener("load", () => resolve(script));
			document.head.appendChild(script);
		});

	useEffect(() => {
		const initMapScript = () => {
			if (window.google) {
				return Promise.resolve();
			}
			const src =
				"https://maps.googleapis.com/maps/api/js?key=AIzaSyAxUh83DrCndIpwWaFTLh2lm2gXCKtYydc&libraries=places";
			return loadAsyncScript(src);
		};
		initMapScript();
	}, [location.pathname]);

	useEffect(() => {
		if (location.pathname === LOGIN_ROUTE) {
			setIsLogin(true);
		} else {
			setIsLogin(false);
		}
	}, [location.pathname]);

	return (
		<StyledAuthPage isFullscreen>
			<AuthContent>
				{isLogin ? (
					<AuthLoginForm
						setWithUsername={setWithUsername}
						withUsername={withUsername}
					/>
				) : (
					<AuthSignupForm />
				)}
			</AuthContent>
		</StyledAuthPage>
	);
};

export default AuthPage;
