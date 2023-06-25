import {ToastVariant} from "@shared/ui";
import {ToastTypeWithId} from "../types";

interface ToastStore {
	toasts: ToastTypeWithId[];
}

interface ToastContextValue {
	store: ToastStore;
	openToast: (variant: ToastVariant, message: string) => ToastTypeWithId["id"];
	closeToastById: (id: ToastTypeWithId["id"]) => void;
}

export type {ToastContextValue, ToastStore};
