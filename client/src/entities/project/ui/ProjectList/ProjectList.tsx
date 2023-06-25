import {useTypedSelector} from "@shared/model";
import {FC, PropsWithChildren} from "react";
import {
	selectProjectsTotalCount,
	selectProjectsIsFetching
} from "../../model/selectors";
import ProjectSkeleton from "../ProjectSkeleton/ProjectSkeleton";
import {StyledProjectList} from "./ProjectList.styled";

const ProjectList: FC<PropsWithChildren> = ({children}) => {
	const totalCount = useTypedSelector(selectProjectsTotalCount);
	const isFetching = useTypedSelector(selectProjectsIsFetching);

	if (!totalCount && !isFetching) {
		return <p>There are no projects.</p>;
	}

	return (
		<StyledProjectList>
			{isFetching
				? [1, 2, 3, 4, 5, 6].map(n => <ProjectSkeleton key={n} />)
				: children}
		</StyledProjectList>
	);
};

export default ProjectList;
