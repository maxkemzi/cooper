import {ThemingProps, useCommonStyleProps} from "@shared/theme";
import {HTMLAttributes, forwardRef} from "react";
import Shimmer from "../Shimmer/Shimmer";
import {SkeletonStyled} from "./Skeleton.styled";

interface Props extends ThemingProps, HTMLAttributes<HTMLDivElement> {
	height?: string;
	flexGrow?: number;
}

const Skeleton = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		height = "32px",
		flexGrow,
		commonStyleProps,
		...rest
	} = useCommonStyleProps(props);

	return (
		<SkeletonStyled
			ref={ref}
			$height={height}
			$flexGrow={flexGrow}
			{...commonStyleProps}
			{...rest}
		>
			<Shimmer />
		</SkeletonStyled>
	);
});

export default Skeleton;
