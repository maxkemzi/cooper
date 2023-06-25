import {LoginForm, SignupForm} from "@features/auth";
import {RouteNames} from "@shared/constants";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {ContentStyled} from "./AuthForm.styled";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === RouteNames.Login) {
			setIsLogin(true);
		} else {
			setIsLogin(false);
		}
	}, [location.pathname]);

	return (
		<ContentStyled>{isLogin ? <LoginForm /> : <SignupForm />}</ContentStyled>
	);
};

export default AuthForm;
