import React from "react";
import {
	ProjectItemSkeletonFooter,
	ProjectItemSkeletonHeader,
	StyledProjectItemSkeleton
} from "@skeletons/ProjectItemSkeleton/ProjectItemSkeleton.styled";
import Skeleton from "../Skeleton/Skeleton";

const ProjectItemSkeleton = () => (
	<StyledProjectItemSkeleton>
		<ProjectItemSkeletonHeader>
			<Skeleton height={40} margin="0 16px 0 0" />
			<Skeleton height={40} />
		</ProjectItemSkeletonHeader>
		<Skeleton height={40} margin="0 0 16px 0" />
		<Skeleton height={24} flexGrow={1} margin="0 0 4px 0" />
		<Skeleton height={24} margin="0 0 16px 0" />
		<Skeleton height={28} margin="0 0 24px 0" />
		<ProjectItemSkeletonFooter>
			<Skeleton height={32} margin="0 16px 0 0" />
			<Skeleton height={32} />
		</ProjectItemSkeletonFooter>
	</StyledProjectItemSkeleton>
);

export default ProjectItemSkeleton;
