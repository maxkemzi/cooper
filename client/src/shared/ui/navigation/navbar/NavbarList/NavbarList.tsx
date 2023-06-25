import {SpacingSize, ThemingProps, useCommonStyleProps} from "@shared/theme";
import {HTMLAttributes, PropsWithChildren, forwardRef} from "react";
import {NavbarListStyled} from "./NavbarList.styled";
import {Direction, StyleProps} from "./types";

type Props = PropsWithChildren<
	ThemingProps &
		HTMLAttributes<HTMLUListElement> & {
			direction?: Direction;
			gap?: SpacingSize;
		}
>;

const NavbarList = forwardRef<HTMLUListElement, Props>((props, ref) => {
	const {
		children,
		gap = "md",
		direction = "row",
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	const styleProps: StyleProps = {
		$gap: gap,
		$direction: direction
	};

	return (
		<NavbarListStyled ref={ref} {...commonStyleProps} {...styleProps} {...rest}>
			{children}
		</NavbarListStyled>
	);
});

export type {Props as NavbarListProps};
export default NavbarList;
