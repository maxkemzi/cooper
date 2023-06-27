import {Button, Modal, Typography} from "@shared/ui";
import {ComponentType, FC, PropsWithChildren} from "react";

interface Props {
	title: string;
	message: string;
	onClose: () => void;
	onConfirm?: () => void;
	onCancel?: () => void;
	AnimationComponent: ComponentType<PropsWithChildren>;
}

const ConfirmModal: FC<Props> = ({
	title,
	message,
	onClose,
	onConfirm,
	onCancel,
	AnimationComponent
}) => (
	<Modal
		AnimationComponent={AnimationComponent}
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
