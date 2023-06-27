import {useCallback, useState} from "react";

const useModalStore = <T extends object>(initialStore: T) => {
	const [store, setStore] = useState<T>(initialStore);

	const disableScroll = () => {
		document.body.style.overflow = "hidden";
	};

	const enableScroll = () => {
		document.body.style.overflow = "unset";
	};

	const openModal = useCallback((options: NonNullable<T>) => {
		disableScroll();
		setStore(options);
	}, []);

	const closeModal = useCallback(() => {
		enableScroll();
		setStore(initialStore);
	}, [initialStore]);

	return {store, openModal, closeModal};
};

export default useModalStore;
