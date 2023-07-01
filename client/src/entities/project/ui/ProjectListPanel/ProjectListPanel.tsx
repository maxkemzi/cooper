import {
	selectProjectsIsFetching,
	selectProjectsTotalCount
} from "@entities/project/model/selectors";
import {useTypedSelector} from "@shared/model";
import {Skeleton, Typography} from "@shared/ui";
import {FC, ReactNode} from "react";
import {
	CenterContentStyled,
	LeftContentStyled,
	ProjectListPanelStyled,
	RightContentStyled
} from "./ProjectListPanel.styled";

interface Props {
	centerContentSlot: ReactNode;
	rightContentSlot: ReactNode;
}

const ProjectListPanel: FC<Props> = ({centerContentSlot, rightContentSlot}) => {
	const totalCount = useTypedSelector(selectProjectsTotalCount);
	const isFetching = useTypedSelector(selectProjectsIsFetching);

	return (
		<ProjectListPanelStyled>
			<LeftContentStyled>
				{isFetching ? (
					<Skeleton />
				) : (
					<Typography noWrap>Total projects: {totalCount}</Typography>
				)}
			</LeftContentStyled>
			<CenterContentStyled>{centerContentSlot}</CenterContentStyled>
			<RightContentStyled>{rightContentSlot}</RightContentStyled>
		</ProjectListPanelStyled>
	);
};

export default ProjectListPanel;
