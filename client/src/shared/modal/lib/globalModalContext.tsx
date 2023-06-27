import {AnimatePresence} from "framer-motion";
import {FC, PropsWithChildren, createContext, useContext, useMemo} from "react";
import ModalAnimation from "./ModalAnimation";
import useModalStore from "./hooks/useModalStore";
import modalComponents from "./modalComponents";
import {GlobalModalContextValue, GlobalModalStore} from "./types";

const initialStore: GlobalModalStore = {
	props: null,
	variant: null
};

const GlobalModalContext = createContext<GlobalModalContextValue | null>(null);

const GlobalModalProvider: FC<PropsWithChildren> = ({children}) => {
	const {
		store,
		openModal: openGlobalModal,
		closeModal: closeGlobalModal
	} = useModalStore(initialStore);
	const {props, variant} = store;

	const renderModalComponent = () => {
		if (!variant || !props) {
			return null;
		}

		const ModalComponent = modalComponents[variant];

		if (!ModalComponent) {
			return null;
		}

		return (
			<ModalComponent
				onClose={closeGlobalModal}
				AnimationComponent={ModalAnimation}
				// todo: replace any with correct type
				{...(props as any)}
			/>
		);
	};

	const value = useMemo(
		() => ({store, openGlobalModal, closeGlobalModal}),
		[closeGlobalModal, openGlobalModal, store]
	);

	return (
		<GlobalModalContext.Provider value={value}>
			{children}
			<AnimatePresence>{renderModalComponent()}</AnimatePresence>
		</GlobalModalContext.Provider>
	);
};

const useGlobalModalContext = () => useContext(GlobalModalContext);

export {GlobalModalProvider, useGlobalModalContext};
