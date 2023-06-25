import {useCallback} from "react";
import {useToastContext} from "../toastContext";
import {ToastContextValue} from "../types";

const useSuccessToast = () => {
	const {closeToastById: closeSuccessToastById, openToast} =
		useToastContext() as ToastContextValue;

	const openSuccessToast = useCallback(
		(message?: string) => openToast("success", message || "Success!"),
		[openToast]
	);

	return {openSuccessToast, closeSuccessToastById};
};

export default useSuccessToast;
