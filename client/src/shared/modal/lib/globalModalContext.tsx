import {
	FC,
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState
} from "react";
import modalComponents from "./modalComponents";
import {
	GlobalModalContextValue,
	GlobalModalProps,
	GlobalModalStore,
	GlobalModalVariant
} from "./types";

const initialStore: GlobalModalStore = {
	props: null,
	variant: null,
	isOpen: false
};

const GlobalModalContext = createContext<GlobalModalContextValue | null>(null);

interface Props {
	children: ReactNode;
}

const GlobalModalProvider: FC<Props> = ({children}) => {
	const [store, setStore] = useState<GlobalModalStore>(initialStore);
	const {isOpen: modalIsOpen, props: modalProps, variant: modalVariant} = store;

	const closeGlobalModal = useCallback(() => setStore(initialStore), []);

	const openGlobalModal = useCallback(
		<V extends GlobalModalVariant>(variant: V, props: GlobalModalProps<V>) => {
			setStore({isOpen: true, props, variant});
		},
		[]
	);

	const renderModalComponent = () => {
		if (!modalVariant) {
			return null;
		}

		const ModalComponent = modalComponents[modalVariant];

		if (!ModalComponent || !modalIsOpen || !modalProps) {
			return null;
		}

		return (
			<ModalComponent
				onClose={closeGlobalModal}
				{...(modalProps as GlobalModalProps<typeof modalVariant>)}
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
			{renderModalComponent()}
		</GlobalModalContext.Provider>
	);
};

const useGlobalModalContext = () => useContext(GlobalModalContext);

export {GlobalModalProvider, useGlobalModalContext};
