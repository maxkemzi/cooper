import {useTypedSelector} from "@shared/model";
import {FC, PropsWithChildren, useEffect} from "react";
import {selectToast} from "../model/selectors";
import {useToastContext} from "./toastContext";
import {ToastContextValue} from "./types";

const ReduxToastProvider: FC<PropsWithChildren> = ({children}) => {
	const toast = useTypedSelector(selectToast);
	const {openToast} = useToastContext() as ToastContextValue;

	useEffect(() => {
		if (toast === null) {
			return;
		}

		const {variant, message} = toast;
		openToast(variant, message);
	}, [openToast, toast]);

	return <>{children}</>;
};

export default ReduxToastProvider;
