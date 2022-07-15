import React, {FC} from "react";
import StyledProjectsCountSkeleton from "@skeletons/ProjectsCountSkeleton/ProjectsCountSkeleton.styled";
import Skeleton from "../Skeleton/Skeleton";

const ProjectsCountSkeleton: FC = () => (
	<StyledProjectsCountSkeleton>
		<Skeleton height={24} />
	</StyledProjectsCountSkeleton>
);

export default ProjectsCountSkeleton;
