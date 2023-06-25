import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {HTMLAttributes, ReactNode, forwardRef, useEffect} from "react";
import {Typography} from "../../../Typography";
import {Icon} from "../../../icons";
import {
	BodyStyled,
	ButtonsStyled,
	CloseButtonStyled,
	ContentStyled,
	HeaderStyled,
	ModalStyled
} from "./Modal.styled";

interface ModalProps {
	onClose: () => void;
	contentSlot: ReactNode;
	buttonsSlot?: ReactNode;
	modalTitle: string;
}

interface Props
	extends ThemingProps,
		ModalProps,
		HTMLAttributes<HTMLDivElement> {}

const Modal = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		contentSlot,
		buttonsSlot,
		onClose,
		modalTitle,
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	useEffect(() => {
		document.body.classList.add("lock");

		return () => {
			document.body.classList.remove("lock");
		};
	}, []);

	return (
		<ModalStyled
			ref={ref}
			role="presentation"
			onClick={onClose}
			{...commonStyleProps}
			{...rest}
		>
			<ContentStyled onClick={e => e.stopPropagation()} role="presentation">
				<HeaderStyled>
					<Typography variant="h4">{modalTitle}</Typography>
					<CloseButtonStyled onClick={onClose}>
						<Icon name="close" />
					</CloseButtonStyled>
				</HeaderStyled>
				<BodyStyled>
					{contentSlot || null}
					{buttonsSlot ? <ButtonsStyled>{buttonsSlot}</ButtonsStyled> : null}
				</BodyStyled>
			</ContentStyled>
		</ModalStyled>
	);
});

export type {ModalProps};
export default Modal;
