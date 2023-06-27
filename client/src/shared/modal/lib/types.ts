import {ModalProps} from "@shared/ui";
import {ComponentPropsWithoutRef} from "react";
import modalComponents from "./modalComponents";

// Global modal types
type GlobalModalVariant = keyof typeof modalComponents;

type GlobalModalProps<T extends GlobalModalVariant> = Omit<
	ComponentPropsWithoutRef<(typeof modalComponents)[T]>,
	"onClose" | "AnimationComponent"
>;

type GlobalModalStore<V extends GlobalModalVariant = GlobalModalVariant> = {
	variant: V | null;
	props: GlobalModalProps<V> | null;
};

interface GlobalModalContextValue {
	store: GlobalModalStore;
	closeGlobalModal: () => void;
	openGlobalModal: <V extends GlobalModalVariant>(
		options: NonNullable<GlobalModalStore<V>>
	) => void;
}

// Custom modal types
type CustomModalProps = Omit<ModalProps, "onClose" | "AnimationComponent">;

interface CustomModalStore {
	props: CustomModalProps | null;
}

interface CustomModalContextValue {
	store: CustomModalStore;
	closeCustomModal: () => void;
	openCustomModal: (options: CustomModalStore) => void;
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
