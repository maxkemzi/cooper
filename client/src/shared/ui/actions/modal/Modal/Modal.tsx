import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {
	ComponentType,
	HTMLAttributes,
	PropsWithChildren,
	ReactNode,
	forwardRef
} from "react";
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

interface Props extends ThemingProps, HTMLAttributes<HTMLDivElement> {
	onClose: () => void;
	contentSlot: ReactNode;
	buttonsSlot?: ReactNode;
	modalTitle: string;
	AnimationComponent: ComponentType<PropsWithChildren>;
}

const Modal = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		contentSlot,
		buttonsSlot,
		onClose,
		modalTitle,
		commonStyleProps,
		AnimationComponent,
		...rest
	} = useCommonStyleProps(props);

	return (
		<ModalStyled
			ref={ref}
			role="presentation"
			onClick={onClose}
			{...commonStyleProps}
			{...rest}
		>
			<AnimationComponent>
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
			</AnimationComponent>
		</ModalStyled>
	);
});

export type {Props as ModalProps};
export default Modal;
