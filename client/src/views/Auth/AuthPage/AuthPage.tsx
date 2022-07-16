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
