import {ToastItem} from "@customTypes/store";
import useTypedDispatch from "@hooks/useTypedDispatch";
import useTypedSelector from "@hooks/useTypedSelector";
import CheckIcon from "@images/check.svg";
import ErrorIcon from "@images/error.svg";
import InfoIcon from "@images/info.svg";
import WarningIcon from "@images/warning.svg";
import {appActs} from "@store/app/app.slice";
import {useCallback} from "react";

type ToastType = "success" | "danger" | "warning" | "info";

const useToast = () => {
	const dispatch = useTypedDispatch();
	const toastList = useTypedSelector(state => state.appState.toastList);

	const deleteToast = useCallback(
		(id: number) => {
			dispatch(appActs.setToastList(toastList.filter(item => item.id !== id)));
		},
		[dispatch, toastList]
	);

	const showToast = (type: ToastType, text: string) => {
		const id: number = Math.floor(Math.random() * 101 + 1);
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
	};

	return {showToast, deleteToast, toastList};
};

export default useToast;
