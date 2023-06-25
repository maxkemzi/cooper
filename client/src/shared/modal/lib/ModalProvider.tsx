import {FC, ReactNode} from "react";
import {CustomModalProvider} from "./customModalContext";
import {GlobalModalProvider} from "./globalModalContext";

interface Props {
	children: ReactNode;
}

const ModalProvider: FC<Props> = ({children}) => (
	<GlobalModalProvider>
		<CustomModalProvider>{children}</CustomModalProvider>
	</GlobalModalProvider>
);

export default ModalProvider;
