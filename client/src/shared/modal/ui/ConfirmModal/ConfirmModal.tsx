import {Button, Modal, Typography} from "@shared/ui";
import {FC} from "react";

interface Props {
	title: string;
	message: string;
	onClose: () => void;
	onConfirm?: () => void;
	onCancel?: () => void;
}

const ConfirmModal: FC<Props> = ({
	title,
	message,
	onClose,
	onConfirm,
	onCancel
}) => (
	<Modal
		modalTitle={title}
		onClose={onClose}
		contentSlot={<Typography variant="body1">{message}</Typography>}
		buttonsSlot={
			<>
				<Button onClick={onCancel || onClose} variant="outline">
					Cancel
				</Button>
				<Button onClick={onConfirm || onClose}>Confirm</Button>
			</>
		}
	/>
);

export default ConfirmModal;
