import {SpacingSize} from "@shared/theme";

type Direction = "row" | "column";

type StyleProps = {$direction: Direction; $gap: SpacingSize};

export type {StyleProps, Direction};
