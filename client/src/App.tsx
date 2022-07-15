import AppRouter from "@components/AppRouter/AppRouter";
import Global from "@components/Global/Global";
import {ToastItem, ToastList} from "@components/ToastList";
import useToast from "@hooks/useToast";
import useTypedDispatch from "@hooks/useTypedDispatch";
import AuthService from "@services/auth/auth.service";
import {authActs} from "@store/auth/auth.slice";
import React, {useEffect} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import Wrapper from "./App.styled";
import {Theme} from "./types";

const theme: Theme = {
	colors: {
		light: "#FFFFFF",
		danger: "#d32f2f",
		accent: "#0D19A3",
		accentLight: "#b8bef9",
		dark: "#1F1F1F",
		darkLight: "#8f8f8f",
		darkLighter: "#EBEBEB"
	},
	fontSizeBase: "18px",
	fontFamilyBase: "'Montserrat', sans-serif",
	borderRadius: "50px",
	borderRadiusSmaller: "8px",
	transitionBase: "0.3s ease-in-out",
	boxShadowBase: "0px 4px 12px rgba(0, 0, 0, 0.25)"
};

const App = () => {
	const dispatch = useTypedDispatch();
	const {toastList, deleteToast} = useToast();

	// Checking for authorization
	useEffect(() => {
		if (localStorage.getItem("token")) {
			dispatch(AuthService.check());
		} else {
			dispatch(authActs.setIsLoading(false));
		}
	}, [dispatch]);

	// Toast interval
	useEffect(() => {
		const interval = setInterval(() => {
			if (toastList.length && toastList.length) {
				deleteToast(toastList[0].id);
			}
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	}, [toastList, deleteToast]);

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Wrapper>
					<AppRouter />
					<ToastList position="top-right">
						{toastList.map(toast => (
							<ToastItem
								position="top-right"
								onCloseClick={deleteToast}
								key={toast.id}
								id={toast.id}
								icon={toast.icon}
								text={toast.text}
							/>
						))}
					</ToastList>
				</Wrapper>
				<Global />
			</Router>
		</ThemeProvider>
	);
};

export default App;
