import {AuthCheckProvider} from "@features/auth";
import {ErrorHandlingProvider} from "@shared/error";
import {BaseStyle} from "@shared/lib";
import {ModalProvider} from "@shared/modal";
import {AppThemeProvider} from "@shared/theme";
import {ReduxToastProvider, ToastProvider} from "@shared/toast";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import store from "./store";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
	<Provider store={store}>
		<AppThemeProvider>
			<ModalProvider>
				<ToastProvider>
					<ReduxToastProvider>
						<ErrorHandlingProvider>
							<AuthCheckProvider>
								<RouterProvider router={router} />
							</AuthCheckProvider>
						</ErrorHandlingProvider>
					</ReduxToastProvider>
				</ToastProvider>
			</ModalProvider>
			<BaseStyle />
		</AppThemeProvider>
	</Provider>
);
