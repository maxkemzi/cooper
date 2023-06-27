import {FC, PropsWithChildren} from "react";
import {CustomModalProvider} from "./customModalContext";
import {GlobalModalProvider} from "./globalModalContext";

const ModalProvider: FC<PropsWithChildren> = ({children}) => (
	<GlobalModalProvider>
		<CustomModalProvider>{children}</CustomModalProvider>
	</GlobalModalProvider>
);

export default ModalProvider;
