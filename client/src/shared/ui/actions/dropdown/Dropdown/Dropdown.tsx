import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {Children, HTMLAttributes, forwardRef} from "react";
import {Typography} from "../../../Typography";
import {Icon} from "../../../icons";
import {ButtonStyled, DropdownStyled, ListStyled} from "./Dropdown.styled";

interface Props extends ThemingProps, HTMLAttributes<HTMLDivElement> {
	title?: string;
	value: string;
	isOpen: boolean;
	onToggle: () => void;
}

const Dropdown = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {title, isOpen, onToggle, value, children, commonStyleProps, ...rest} =
		useCommonStyleProps(props);

	const text = title ? `${title}: ${value}` : value;

	return (
		<DropdownStyled ref={ref} {...commonStyleProps} {...rest}>
			<ButtonStyled onClick={onToggle} type="button">
				<Typography
					as="span"
					color="primary"
					colorVariant="contrast"
					variant="body1"
				>
					{text}
				</Typography>
				<Icon color="primary" colorVariant="contrast" name="caretDown" />
			</ButtonStyled>
			{isOpen ? (
				<ListStyled>
					{Children.map(children, child => (
						<li>{child}</li>
					))}
				</ListStyled>
			) : null}
		</DropdownStyled>
	);
});

export default Dropdown;
