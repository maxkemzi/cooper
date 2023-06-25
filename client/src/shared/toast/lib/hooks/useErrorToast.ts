import {useCallback} from "react";
import {useToastContext} from "../toastContext";
import {ToastContextValue} from "../types";

const useErrorToast = () => {
	const {closeToastById: closeErrorToastById, openToast} =
		useToastContext() as ToastContextValue;

	const openErrorToast = useCallback(
		(message?: string) =>
			openToast("error", message || "Something went wrong."),
		[openToast]
	);

	return {openErrorToast, closeErrorToastById};
};

export default useErrorToast;
