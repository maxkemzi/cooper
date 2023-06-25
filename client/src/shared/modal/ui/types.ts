import {ButtonVariant} from "@shared/ui";

interface ModalButton {
	text: string;
	onClick: () => void;
	variant: ButtonVariant;
}

export type {ModalButton};
