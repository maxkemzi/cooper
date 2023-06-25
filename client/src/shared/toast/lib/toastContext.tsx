import {FC, PropsWithChildren, createContext, useContext, useMemo} from "react";
import ToastList from "../ui/ToastList/ToastList";
import useToastStore from "./hooks/useToastStore";
import {ToastContextValue} from "./types";

const ToastContext = createContext<ToastContextValue | null>(null);

const ToastProvider: FC<PropsWithChildren> = ({children}) => {
	const {closeToastById, openToast, store} = useToastStore();
	const {toasts} = store;

	const value = useMemo(
		() => ({openToast, closeToastById, store}),
		[closeToastById, openToast, store]
	);

	return (
		<ToastContext.Provider value={value}>
			{children}
			{toasts.length !== 0 ? (
				<ToastList
					onCloseById={closeToastById}
					toasts={toasts}
					position="top-right"
				/>
			) : null}
		</ToastContext.Provider>
	);
};

const useToastContext = () => useContext(ToastContext);

export {ToastContext, ToastProvider, useToastContext};
