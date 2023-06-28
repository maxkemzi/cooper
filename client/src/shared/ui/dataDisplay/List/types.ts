import {SpacingSize} from "@shared/theme";

type Gap = SpacingSize;
type ColumnGap = SpacingSize;
type RowGap = SpacingSize;
type Direction = "row" | "column";
type Align = "center" | "start" | "end";
type Justify = "center" | "start" | "end";
type NoWrap = boolean;

interface StyleProps {
	$direction: Direction;
	$align: Align;
	$justify: Justify;
	$noWrap: NoWrap;
	$gap?: Gap;
	$columnGap?: ColumnGap;
	$rowGap?: RowGap;
}

export type {
	Align,
	ColumnGap,
	Direction,
	Gap,
	Justify,
	NoWrap,
	RowGap,
	StyleProps
};
