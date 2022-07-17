import React, {FC} from "react";
import StyledSkeleton from "@skeletons/Skeleton/Skeleton.styled";
import Shimmer from "../Shimmer/Shimmer";

interface SkeletonProps {
	height?: string;
	margin?: string;
	flexGrow?: string;
}

const Skeleton: FC<SkeletonProps> = ({height = "32px", margin, flexGrow}) => (
	<StyledSkeleton height={height} margin={margin} flexGrow={flexGrow}>
		<Shimmer />
	</StyledSkeleton>
);

export default Skeleton;
