import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	PropsWithChildren,
	forwardRef
} from "react";
import {NavLinkProps} from "react-router-dom";
import {Typography} from "../../Typography";
import {LinkStyled} from "./Link.styled";
import asToElementMapping from "./constants/asToElementMapping";
import {As} from "./types";

type BaseProps = ThemingProps & {
	// add additional props here
};

type LinkAsExternalLinkProps = BaseProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
		as?: Extract<As, "externalLink">;
	};

type LinkAsButtonProps = BaseProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
		as: Extract<As, "button">;
	};

type LinkAsRouteLinkProps = BaseProps &
	Omit<NavLinkProps, keyof BaseProps> & {
		as: Extract<As, "routeLink">;
	};

type Props = LinkAsExternalLinkProps | LinkAsButtonProps | LinkAsRouteLinkProps;

const Link = forwardRef<HTMLElement, PropsWithChildren<Props>>((props, ref) => {
	const {
		children,
		as = "externalLink",
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	const Element = asToElementMapping[as];

	return (
		<LinkStyled ref={ref} as={Element} {...commonStyleProps} {...rest}>
			<Typography variant="link">{children}</Typography>
		</LinkStyled>
	);
});

export default Link;
