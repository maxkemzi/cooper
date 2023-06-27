import {LoginForm, SignupForm} from "@features/auth";
import {RouteName} from "@shared/constants";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {ContentStyled} from "./AuthForm.styled";

const AuthForm = () => {
	const location = useLocation();
	const currentlyOnLoginRoute = location.pathname === RouteName.LOGIN;

	const [isLogin, setIsLogin] = useState(currentlyOnLoginRoute);

	useEffect(() => {
		if (currentlyOnLoginRoute) {
			setIsLogin(true);
		} else {
			setIsLogin(false);
		}
	}, [currentlyOnLoginRoute]);

	return (
		<ContentStyled>{isLogin ? <LoginForm /> : <SignupForm />}</ContentStyled>
	);
};

export default AuthForm;
