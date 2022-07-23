import React, {FC, memo} from "react";
import {ToastPosition} from "../ToastList.styled";
import {
	StyledToastItem,
	ToastItemButton,
	ToastItemCrossIcon,
	ToastItemIcon,
	ToastItemText
} from "./ToastItem.styled";

interface ToastItemProps {
	text: string;
	icon: string;
	onClose: () => void;
	position: ToastPosition;
}

const ToastItem: FC<ToastItemProps> = memo(
	({icon, text, onClose, position}) => (
		<StyledToastItem position={position}>
			<ToastItemIcon src={icon} alt="icon" />
			<ToastItemText>{text}</ToastItemText>
			<ToastItemButton onClick={onClose} type="button">
				<ToastItemCrossIcon />
			</ToastItemButton>
		</StyledToastItem>
	)
);

export default ToastItem;
