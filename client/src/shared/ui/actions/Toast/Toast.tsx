import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {HTMLAttributes, forwardRef} from "react";
import {Typography} from "../../Typography";
import {Icon} from "../../icons";
import {ButtonStyled, ToastStyled} from "./Toast.styled";
import variantToColorMapping from "./lib/variantToColorMapping";
import variantToIconNameMapping from "./lib/variantToIconNameMapping";
import {StyleProps, Variant} from "./types";

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

	const styleProps: StyleProps = {$color: color};

	return (
		<ToastStyled ref={ref} {...commonStyleProps} {...styleProps} {...rest}>
			<Icon name={iconName} color={color} variant="solid" size={24} />
			<Typography variant="subtitle2" noWrap>
				{message}
			</Typography>
			<ButtonStyled onClick={onClose} type="button">
				<Icon name="close" />
			</ButtonStyled>
		</ToastStyled>
	);
});

export default Toast;
