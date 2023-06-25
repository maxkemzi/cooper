import {Skeleton} from "@shared/ui";
import {StyledProjectSkeleton, Footer, Header} from "./ProjectSkeleton.styled";

const ProjectSkeleton = () => (
	<StyledProjectSkeleton>
		<Header>
			<Skeleton height="40px" mr="md" />
			<Skeleton height="40px" />
		</Header>
		<Skeleton height="40px" mb="md" />
		<Skeleton height="24px" flexGrow={1} mb="xs" />
		<Skeleton height="24px" mb="md" />
		<Skeleton height="28px" mb="lg" />
		<Footer>
			<Skeleton height="32px" mb="md" />
			<Skeleton height="32px" />
		</Footer>
	</StyledProjectSkeleton>
);

export default ProjectSkeleton;
