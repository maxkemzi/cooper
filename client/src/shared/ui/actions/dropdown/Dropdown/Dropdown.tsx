import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {HTMLAttributes, ReactNode, forwardRef} from "react";
import {Typography} from "../../../Typography";
import {Icon} from "../../../icons";
import {ButtonStyled, DropdownStyled, ListStyled} from "./Dropdown.styled";

interface Props extends ThemingProps, HTMLAttributes<HTMLDivElement> {
	title: string;
	isPlaceholder?: boolean;
	value?: string;
	isOpen: boolean;
	onToggle: () => void;
	children: ReactNode;
}

const Dropdown = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		title,
		isPlaceholder,
		isOpen,
		onToggle,
		className,
		value,
		children,
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	const text = isPlaceholder ? value || title : `${title} ${value}`;

	return (
		<DropdownStyled ref={ref} {...commonStyleProps} {...rest}>
			<ButtonStyled onClick={onToggle} type="button">
				<Typography color="primary" colorVariant="contrast" variant="body1">
					{text}
				</Typography>
				<Icon color="primary" colorVariant="contrast" name="caretDown" />
			</ButtonStyled>
			{isOpen ? <ListStyled>{children}</ListStyled> : null}
		</DropdownStyled>
	);
});

export default Dropdown;
