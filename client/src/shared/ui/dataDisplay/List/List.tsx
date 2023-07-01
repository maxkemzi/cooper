import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {Children, HTMLAttributes, forwardRef} from "react";
import {ItemStyled, ListStyled} from "./List.styled";
import {
	Align,
	ColumnGap,
	Direction,
	Gap,
	Justify,
	NoWrap,
	RowGap,
	StyleProps
} from "./types";

interface BaseProps extends ThemingProps, HTMLAttributes<HTMLUListElement> {
	direction?: Direction;
	align?: Align;
	justify?: Justify;
	noWrap?: NoWrap;
}

type GapProps =
	| {gap?: Gap; rowGap?: never; columnGap?: never}
	| {
			gap?: never;
			columnGap?: ColumnGap;
			rowGap?: RowGap;
	  };

type Props = BaseProps & GapProps;

const List = forwardRef<HTMLUListElement, Props>((props, ref) => {
	const {
		children,
		gap,
		align,
		justify,
		columnGap = "md",
		rowGap = "sm",
		noWrap = false,
		direction = "row",
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	const styleProps: StyleProps = {
		$direction: direction,
		$gap: gap,
		$align: direction === "column" ? "start" : "center",
		$justify: direction === "column" ? "center" : "start",
		$noWrap: noWrap,
		$columnGap: columnGap,
		$rowGap: rowGap
	};

	return (
		<ListStyled ref={ref} {...styleProps} {...commonStyleProps} {...rest}>
			{Children.map(children, child => (
				<ItemStyled>{child}</ItemStyled>
			))}
		</ListStyled>
	);
});

export default List;
