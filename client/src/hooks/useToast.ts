import {ToastItem} from "@customTypes/store";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import CheckIcon from "@images/check.svg";
import ErrorIcon from "@images/error.svg";
import InfoIcon from "@images/info.svg";
import WarningIcon from "@images/warning.svg";
import {getAppToastList} from "@store/app/app.selectors";
import {appActs} from "@store/app/app.slice";
import {nanoid} from "nanoid";
import {useCallback} from "react";

type ToastType = "success" | "danger" | "warning" | "info";

const useToast = () => {
	const dispatch = useTypedDispatch();
	const toastList = useTypedSelector(getAppToastList);

	const deleteToast = useCallback(
		(id: number | string) => {
			dispatch(appActs.setToastList(toastList.filter(item => item.id !== id)));
		},
		[dispatch, toastList]
	);

	const showToast = useCallback(
		(type: ToastType, text: string) => {
			const id: string = nanoid();
			let toastProps: ToastItem = {id, text, icon: InfoIcon};

			switch (type) {
				case "success":
					toastProps = {
						...toastProps,
						icon: CheckIcon
					};
					break;
				case "danger":
					toastProps = {
						...toastProps,
						icon: ErrorIcon
					};
					break;
				case "info":
					toastProps = {
						...toastProps,
						icon: InfoIcon
					};
					break;
				case "warning":
					toastProps = {
						...toastProps,
						icon: WarningIcon
					};
					break;
				default:
					dispatch(appActs.setToastList([]));
			}

			dispatch(appActs.setToastList([...toastList, toastProps]));
		},
		[dispatch, toastList]
	);

	return {showToast, deleteToast, toastList};
};

export default useToast;
