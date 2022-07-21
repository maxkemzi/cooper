import DeleteButton from "@components/DeleteButton/DeleteButton";
import Title from "@components/Title/Title";
import React, {Dispatch, FC, ReactNode, SetStateAction, useEffect} from "react";
import {
	ModalBody,
	ModalContent,
	ModalHeader,
	StyledModal
} from "./Modal.styled";

export interface ModalProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	children: ReactNode;
	title: string;
}

const Modal: FC<ModalProps> = ({children, isOpen, setIsOpen, title}) => {
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("lock");
		} else {
			document.body.classList.remove("lock");
		}
	}, [isOpen]);

	const handleClose = () => setIsOpen(false);

	return (
		<StyledModal isOpen={isOpen} role="presentation" onClick={handleClose}>
			<ModalContent onClick={e => e.stopPropagation()} role="presentation">
				<ModalHeader>
					<Title>{title}</Title>
					<DeleteButton onClick={handleClose} />
				</ModalHeader>
				<ModalBody>{children}</ModalBody>
			</ModalContent>
		</StyledModal>
	);
};

export default Modal;
