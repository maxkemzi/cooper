import {Modal} from "@shared/ui";
import {
	FC,
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState
} from "react";
import {
	CustomModalContextValue,
	CustomModalProps,
	CustomModalStore
} from "./types";

const initialStore: CustomModalStore = {
	isOpen: false,
	props: null
};

const CustomModalContext = createContext<CustomModalContextValue | null>(null);

interface Props {
	children: ReactNode;
}

const CustomModalProvider: FC<Props> = ({children}) => {
	const [store, setStore] = useState<CustomModalStore>(initialStore);
	const {props: modalProps, isOpen: modalIsOpen} = store;

	const closeCustomModal = useCallback(() => setStore(initialStore), []);

	const openCustomModal = useCallback((props: CustomModalProps) => {
		setStore({isOpen: true, props});
	}, []);

	const renderModalComponent = () => {
		if (!modalIsOpen || !modalProps) {
			return null;
		}

		return <Modal onClose={closeCustomModal} {...modalProps} />;
	};

	const value = useMemo(
		() => ({store, openCustomModal, closeCustomModal}),
		[closeCustomModal, openCustomModal, store]
	);

	return (
		<CustomModalContext.Provider value={value}>
			{children}
			{renderModalComponent()}
		</CustomModalContext.Provider>
	);
};

const useCustomModalContext = () => useContext(CustomModalContext);

export {CustomModalProvider, useCustomModalContext};
