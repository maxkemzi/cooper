import {Category} from "@customTypes/entities";
import {WorkType} from "@customTypes/entities/project";
import {getInfoItems} from "@utils/helpers/getInfoItems";
import React, {FC} from "react";
import {StyledProjectItem} from "./ProjectItem.styled";
import ProjectItemContent from "./ProjectItemContent/ProjectItemContent";
import ProjectItemFooter from "./ProjectItemFooter/ProjectItemFooter";
import ProjectItemHeader from "./ProjectItemHeader/ProjectItemHeader";

interface ProjectItemProps {
	id: string | number;
	workType: WorkType;
	budget: number;
	categories: Category[];
	title: string;
	description: string;
	creator: {
		avatar: string;
		username: string;
		projectsCount: number;
		createdDate: string;
	};
	createdDate: string;
}

const ProjectItem: FC<ProjectItemProps> = ({
	budget,
	creator,
	createdDate,
	description,
	categories,
	title,
	workType,
	id
}) => {
	const infoList: any[] = getInfoItems({workType, budget});
	return (
		<StyledProjectItem>
			<ProjectItemHeader
				avatar={creator.avatar}
				id={id}
				title={title}
				username={creator.username}
			/>
			<ProjectItemContent
				description={description}
				infoItems={infoList}
				categories={categories}
			/>
			<ProjectItemFooter id={id} date={createdDate} />
		</StyledProjectItem>
	);
};

export default ProjectItem;
