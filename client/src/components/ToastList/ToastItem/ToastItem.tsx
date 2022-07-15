import {IToast, ToastPosition} from "@customTypes/index";
import React, {FC} from "react";
import {
	StyledToastItem,
	ToastItemButton,
	ToastItemCrossIcon,
	ToastItemIcon,
	ToastItemText
} from "./ToastItem.styled";

interface ToastItemProps extends IToast {
	onCloseClick: (id: number) => void;
	position: ToastPosition;
}

const ToastItem: FC<ToastItemProps> = ({
	id,
	icon,
	text,
	onCloseClick,
	position
}) => (
	<StyledToastItem position={position}>
		<ToastItemIcon src={icon} alt="icon" />
		<ToastItemText>{text}</ToastItemText>
		<ToastItemButton onClick={() => onCloseClick(id)} type="button">
			<ToastItemCrossIcon />
		</ToastItemButton>
	</StyledToastItem>
);

export default ToastItem;
