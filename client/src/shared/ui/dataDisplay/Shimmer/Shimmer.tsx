import {ThemingProps} from "@shared/theme";
import {FC, forwardRef, memo} from "react";
import {StyledComponentPropsWithRef} from "styled-components";
import {ContentStyled, ShimmerStyled} from "./Shimmer.styled";

interface Props extends ThemingProps, StyledComponentPropsWithRef<"div"> {}

const Shimmer: FC<Props> = memo(
	forwardRef((props, ref) => (
		<ShimmerStyled ref={ref} {...props}>
			<ContentStyled />
		</ShimmerStyled>
	))
);

export default Shimmer;
