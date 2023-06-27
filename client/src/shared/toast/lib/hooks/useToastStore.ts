import {ToastVariant} from "@shared/ui";
import {nanoid} from "nanoid";
import {useCallback, useEffect, useRef, useState} from "react";
import {ToastStore} from "../types";

const useToastStore = () => {
	const [store, setStore] = useState<ToastStore>({toasts: []});
	const toastRemovingTimeoutId = useRef<NodeJS.Timeout | null>(null);

	const generateToastId = () => {
		const id = nanoid();
		return id;
	};

	const addToastToStore = (toast: ToastStore["toasts"][0]) => {
		setStore(prev => ({
			...prev,
			toasts: [...prev.toasts, toast]
		}));
	};

	const removeToastFromStoreById = (id: string) => {
		setStore(prev => ({
			...prev,
			toasts: prev.toasts.filter(toast => toast.id !== id)
		}));
	};

	const openToast = useCallback((variant: ToastVariant, message: string) => {
		const id = generateToastId();

		const newToast = {id, variant, message};
		addToastToStore(newToast);

		toastRemovingTimeoutId.current = setTimeout(() => {
			removeToastFromStoreById(id);
		}, 4000);

		return id;
	}, []);

	const closeToastById = useCallback((id: string) => {
		removeToastFromStoreById(id);
	}, []);

	useEffect(
		() => () => {
			if (toastRemovingTimeoutId.current) {
				clearTimeout(toastRemovingTimeoutId.current);
			}
		},
		[]
	);

	return {openToast, closeToastById, store};
};

export default useToastStore;
