import Button from "@components/Button/Button";
import Modal, {ModalProps} from "@components/Modal/Modal";
import React, {FC} from "react";
import ConfirmModalButtons from "./ConfirmModal.styled";

interface ConfirmModalProps extends ModalProps {
	onConfirm: () => void;
}

const ConfirmModal: FC<ConfirmModalProps> = ({
	onConfirm,
	children,
	onClose,
	...props
}) => (
	<Modal onClose={onClose} {...props}>
		<p>{children}</p>
		<ConfirmModalButtons>
			<Button
				variant="outline"
				marginRight="8px"
				size="small"
				onClick={onClose}
			>
				Cancel
			</Button>
			<Button
				size="small"
				onClick={() => {
					onConfirm();
					onClose();
				}}
			>
				Confirm
			</Button>
		</ConfirmModalButtons>
	</Modal>
);

export default ConfirmModal;
