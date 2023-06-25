import {ModalProps} from "@shared/ui";
import {ComponentProps} from "react";
import modalComponents from "./modalComponents";

// Global modal types
type GlobalModalVariant = keyof typeof modalComponents;

type GlobalModalProps<V extends GlobalModalVariant> = Omit<
	ComponentProps<(typeof modalComponents)[V]>,
	"onClose"
>;

interface GlobalModalStore {
	isOpen: boolean;
	variant: GlobalModalVariant | null;
	props: object | null;
}

interface GlobalModalContextValue {
	store: GlobalModalStore;
	closeGlobalModal: () => void;
	openGlobalModal: <V extends GlobalModalVariant>(
		variant: V,
		props: GlobalModalProps<V>
	) => void;
}

// Custom modal types
type CustomModalProps = Omit<ModalProps, "onClose">;

interface CustomModalStore {
	isOpen: boolean;
	props: CustomModalProps | null;
}

interface CustomModalContextValue {
	store: CustomModalStore;
	closeCustomModal: () => void;
	openCustomModal: (props: CustomModalProps) => void;
}

export type {
	GlobalModalContextValue,
	GlobalModalProps,
	GlobalModalVariant,
	GlobalModalStore,
	CustomModalContextValue,
	CustomModalProps,
	CustomModalStore
};
