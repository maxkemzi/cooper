import {selectProjectsTotalCount} from "@entities/project/model/selectors";
import {ScreenWidths} from "@shared/constants";
import {useWindowSize} from "@shared/lib";
import {useTypedSelector} from "@shared/model";
import {Skeleton} from "@shared/ui";
import {FC, ReactNode} from "react";
import {
	FlexContainerStyled,
	ProjectListPanelStyled,
	TotalCount
} from "./ProjectListPanel.styled";

interface Props {
	leftContentSlot: ReactNode;
	rightContentSlot: ReactNode;
}

const ProjectListPanel: FC<Props> = ({leftContentSlot, rightContentSlot}) => {
	const {width} = useWindowSize();
	const totalCount = useTypedSelector(selectProjectsTotalCount);

	return (
		<ProjectListPanelStyled>
			<FlexContainerStyled>
				<TotalCount>
					{totalCount === null ? <Skeleton /> : `Total projects: ${totalCount}`}
				</TotalCount>
				{width <= ScreenWidths.Tablet ? rightContentSlot : leftContentSlot}
			</FlexContainerStyled>
			{width <= ScreenWidths.Tablet ? leftContentSlot : rightContentSlot}
		</ProjectListPanelStyled>
	);
};

export default ProjectListPanel;
