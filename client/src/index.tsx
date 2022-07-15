import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import store from "@store/index";
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
