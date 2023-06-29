import {useTypedSelector} from "@shared/model";
import {FC, PropsWithChildren, useMemo} from "react";
import {
	selectProjectsIsFetching,
	selectProjectsIsFetchingMore,
	selectProjectsLimit,
	selectProjectsTotalCount
} from "../../model/selectors";
import ProjectSkeleton from "../ProjectSkeleton/ProjectSkeleton";
import {StyledProjectList} from "./ProjectList.styled";

const ProjectList: FC<PropsWithChildren> = ({children}) => {
	const limit = useTypedSelector(selectProjectsLimit);
	const totalCount = useTypedSelector(selectProjectsTotalCount);
	const isFetching = useTypedSelector(selectProjectsIsFetching);
	const isFetchingMore = useTypedSelector(selectProjectsIsFetchingMore);

	const skeletonIds = useMemo(
		() => Array.from(Array(limit).keys()).map(i => i + 1),
		[limit]
	);

	if (!totalCount && !isFetching) {
		return <p>There are no projects.</p>;
	}

	return (
		<StyledProjectList>
			{isFetching
				? skeletonIds.map(n => <ProjectSkeleton key={n} />)
				: children}
			{isFetchingMore
				? skeletonIds.map(n => <ProjectSkeleton key={n} />)
				: null}
		</StyledProjectList>
	);
};

export default ProjectList;
