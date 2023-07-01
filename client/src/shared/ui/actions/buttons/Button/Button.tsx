import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	PropsWithChildren,
	forwardRef
} from "react";
import {NavLinkProps} from "react-router-dom";
import {Typography} from "../../../Typography";
import {ButtonStyled} from "./Button.styled";
import asToElementMapping from "./constants/asToElementMapping";
import {As, Color, Size, StyleProps, Variant} from "./types";

type BaseProps = ThemingProps & {
	size?: Size;
	variant?: Variant;
	color?: Color;
};

type ButtonAsButtonProps = BaseProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
		as?: Extract<As, "button">;
	};

type ButtonAsExternalLinkProps = BaseProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
		as: Extract<As, "externalLink">;
	};

type ButtonAsRouteLinkProps = BaseProps &
	Omit<NavLinkProps, keyof BaseProps> & {
		as: Extract<As, "routeLink">;
	};

type Props =
	| ButtonAsButtonProps
	| ButtonAsExternalLinkProps
	| ButtonAsRouteLinkProps;

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
	(props, ref) => {
		const {
			children,
			type,
			size = "md",
			variant = "solid",
			color = "secondary",
			as = "button",
			commonStyleProps,
			...rest
		} = useCommonStyleProps(props);

		const Element = asToElementMapping[as];

		const styleProps: StyleProps = {
			$color: color,
			$size: size,
			$variant: variant
		};

		return (
			<ButtonStyled
				ref={ref}
				as={Element}
				type={as === "button" ? type || "button" : type}
				{...styleProps}
				{...commonStyleProps}
				{...rest}
			>
				<Typography color="inherit" variant="button" noWrap>
					{children}
				</Typography>
			</ButtonStyled>
		);
	}
);

export type {Props as ButtonProps};
export default Button;
