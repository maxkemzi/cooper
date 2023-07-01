import {useTypedSelector} from "@shared/model";
import {Typography} from "@shared/ui";
import {FC, PropsWithChildren, useMemo} from "react";
import {
	selectProjectsError,
	selectProjectsIsFetching,
	selectProjectsLimit,
	selectProjectsTotalCount
} from "../../model/selectors";
import ProjectSkeleton from "../ProjectSkeleton/ProjectSkeleton";
import {StyledProjectList} from "./ProjectList.styled";

const ProjectList: FC<PropsWithChildren> = ({children}) => {
	const limit = useTypedSelector(selectProjectsLimit);
	const totalCount = useTypedSelector(selectProjectsTotalCount);
	const isFetching = useTypedSelector(selectProjectsIsFetching);
	const error = useTypedSelector(selectProjectsError);

	const skeletonIds = useMemo(
		() => Array.from(Array(limit).keys()).map(i => i + 1),
		[limit]
	);

	if (error) {
		return <Typography>{error}</Typography>;
	}

	if (!totalCount && !isFetching) {
		return <Typography>There are no projects.</Typography>;
	}

	return (
		<StyledProjectList>
			{children}
			{isFetching ? skeletonIds.map(n => <ProjectSkeleton key={n} />) : null}
		</StyledProjectList>
	);
};

export default ProjectList;
