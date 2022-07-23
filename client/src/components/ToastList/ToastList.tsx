import useToast from "@hooks/useToast";
import React, {FC, ReactNode, useEffect} from "react";
import StyledToastList, {ToastPosition} from "./ToastList.styled";

interface ToastListProps {
	children: ReactNode;
	position: ToastPosition;
}

const ToastList: FC<ToastListProps> = ({position, children}) => {
	const {toastList, deleteToast} = useToast();

	// Toast interval
	useEffect(() => {
		const interval = setInterval(() => {
			if (toastList.length) {
				deleteToast(toastList[0].id);
			}
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, [toastList, deleteToast]);

	return <StyledToastList position={position}>{children}</StyledToastList>;
};

export default ToastList;
