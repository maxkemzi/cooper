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
			<Skeleton height="40px" margin="0 16px 0 0" />
			<Skeleton height="40px" />
		</ProjectItemSkeletonHeader>
		<Skeleton height="40px" margin="0 0 16px 0" />
		<Skeleton height="24px" flexGrow="1px" margin="0 0 4px 0" />
		<Skeleton height="24px" margin="0 0 16px 0" />
		<Skeleton height="28px" margin="0 0 24px 0" />
		<ProjectItemSkeletonFooter>
			<Skeleton height="32px" margin="0 16px 0 0" />
			<Skeleton height="32px" />
		</ProjectItemSkeletonFooter>
	</StyledProjectItemSkeleton>
);

export default ProjectItemSkeleton;
