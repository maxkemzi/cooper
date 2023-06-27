import {Modal} from "@shared/ui";
import {AnimatePresence} from "framer-motion";
import {FC, PropsWithChildren, createContext, useContext, useMemo} from "react";
import ModalAnimation from "./ModalAnimation";
import useModalStore from "./hooks/useModalStore";
import {CustomModalContextValue, CustomModalStore} from "./types";

const initialStore: CustomModalStore = {
	props: null
};

const CustomModalContext = createContext<CustomModalContextValue | null>(null);

const CustomModalProvider: FC<PropsWithChildren> = ({children}) => {
	const {
		store,
		closeModal: closeCustomModal,
		openModal: openCustomModal
	} = useModalStore(initialStore);
	const {props} = store;

	const renderModalComponent = () => {
		if (!props) {
			return null;
		}

		return (
			<Modal
				onClose={closeCustomModal}
				AnimationComponent={ModalAnimation}
				{...props}
			/>
		);
	};

	const value = useMemo(
		() => ({store, openCustomModal, closeCustomModal}),
		[closeCustomModal, openCustomModal, store]
	);

	return (
		<CustomModalContext.Provider value={value}>
			{children}
			<AnimatePresence>{renderModalComponent()}</AnimatePresence>
		</CustomModalContext.Provider>
	);
};

const useCustomModalContext = () => useContext(CustomModalContext);

export {CustomModalProvider, useCustomModalContext};
