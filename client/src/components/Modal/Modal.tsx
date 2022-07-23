import DeleteButton from "@components/DeleteButton/DeleteButton";
import Title from "@components/Title/Title";
import React, {FC, ReactNode, useEffect} from "react";
import {
	ModalBody,
	ModalContent,
	ModalHeader,
	StyledModal
} from "./Modal.styled";

export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	title: string;
	width?: string;
	maxWidth?: string;
}

const Modal: FC<ModalProps> = ({
	children,
	isOpen,
	onClose,
	title,
	width,
	maxWidth
}) => {
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("lock");
		} else {
			document.body.classList.remove("lock");
		}
	}, [isOpen]);

	return (
		<StyledModal isOpen={isOpen} role="presentation" onClick={onClose}>
			<ModalContent
				width={width}
				maxWidth={maxWidth}
				onClick={e => e.stopPropagation()}
				role="presentation"
			>
				<ModalHeader>
					<Title>{title}</Title>
					<DeleteButton onClick={onClose} />
				</ModalHeader>
				<ModalBody>{children}</ModalBody>
			</ModalContent>
		</StyledModal>
	);
};

export default Modal;
