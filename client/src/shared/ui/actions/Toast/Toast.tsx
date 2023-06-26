import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {HTMLAttributes, forwardRef} from "react";
import {Typography} from "../../Typography";
import {Icon} from "../../icons";
import {
	BodyStyled,
	ButtonStyled,
	IconWrapperStyled,
	ToastStyled
} from "./Toast.styled";
import variantToColorMapping from "./constants/variantToColorMapping";
import variantToIconNameMapping from "./constants/variantToIconNameMapping";
import {Variant} from "./types";

interface Props extends ThemingProps, HTMLAttributes<HTMLDivElement> {
	message: string;
	variant: Variant;
	onClose: () => void;
}

const Toast = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {variant, message, onClose, commonStyleProps, ...rest} =
		useCommonStyleProps(props);

	const iconName = variantToIconNameMapping[variant];
	const color = variantToColorMapping[variant];

	return (
		<ToastStyled ref={ref} {...commonStyleProps} {...rest}>
			<BodyStyled>
				<IconWrapperStyled>
					<Icon name={iconName} color={color} variant="solid" size={24} />
				</IconWrapperStyled>
				<Typography variant="body2">{message}</Typography>
			</BodyStyled>
			<ButtonStyled onClick={onClose} type="button">
				<Icon name="close" />
			</ButtonStyled>
		</ToastStyled>
	);
});

export default Toast;
