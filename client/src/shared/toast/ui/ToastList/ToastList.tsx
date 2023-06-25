import {ToastTypeWithId} from "@shared/toast/types";
import {Toast} from "@shared/ui";
import {FC} from "react";
import ToastListStyled from "./ToastList.styled";
import {ToastPosition} from "./types";

interface Props {
	position: ToastPosition;
	toasts: ToastTypeWithId[];
	onCloseById: (id: ToastTypeWithId["id"]) => void;
}

const ToastList: FC<Props> = ({position, onCloseById, toasts}) => (
	<ToastListStyled position={position}>
		{toasts.map(({id, variant, message}) => {
			const handleClose = () => onCloseById(id);

			return (
				<Toast
					key={id}
					onClose={handleClose}
					variant={variant}
					message={message}
				/>
			);
		})}
	</ToastListStyled>
);

export default ToastList;
