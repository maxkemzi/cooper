import {Category} from "@customTypes/entities";
import {Visibility, WorkType} from "@customTypes/entities/project";
import {EditProjectFormValues} from "@customTypes/forms";
import {getInfoItems} from "@utils/helpers";
import React, {Dispatch, FC, memo, SetStateAction, useMemo} from "react";
import {ProjectItemContent, StyledProjectItem} from "./ProjectItem.styled";
import ProjectItemBody from "./ProjectItemBody/ProjectItemBody";
import ProjectItemFooter from "./ProjectItemFooter/ProjectItemFooter";
import ProjectItemHeader from "./ProjectItemHeader/ProjectItemHeader";
import ProjectItemPanel from "./ProjectItemPanel/ProjectItemPanel";

interface ProjectItemProps {
	id: string | number;
	workType: WorkType;
	budget: number;
	categories: Category[];
	title: string;
	description: string;
	visibility: Visibility;
	creator: {
		avatar: string;
		username: string;
		projectsCount: number;
		createdDate: string;
	};
	createdDate: string;
	superMode?: boolean;
	confirmModal?: {
		setOnConfirm: Dispatch<SetStateAction<() => void>>;
		setIsModalOpen: Dispatch<SetStateAction<boolean>>;
	};
	editModal?: {
		setData: Dispatch<SetStateAction<EditProjectFormValues>>;
		setIsModalOpen: Dispatch<SetStateAction<boolean>>;
	};
}

const ProjectItem: FC<ProjectItemProps> = memo(
	({
		budget,
		creator,
		createdDate,
		description,
		categories,
		title,
		workType,
		id,
		superMode,
		confirmModal,
		editModal,
		visibility
	}) => {
		const infoItems: any[] = useMemo(
			() => getInfoItems({workType, budget}),
			[budget, workType]
		);

		return (
			<StyledProjectItem superMode={superMode}>
				{superMode && (
					<ProjectItemPanel
						editData={{
							id,
							budget,
							categories,
							description,
							title,
							workType,
							visibility
						}}
						editModal={editModal}
						confirmModal={confirmModal}
						id={id}
					/>
				)}
				<ProjectItemContent>
					<ProjectItemHeader
						avatar={creator.avatar}
						id={id}
						title={title}
						username={creator.username}
					/>
					<ProjectItemBody
						description={description}
						infoItems={infoItems}
						categories={categories}
					/>
					<ProjectItemFooter id={id} date={createdDate} />
				</ProjectItemContent>
			</StyledProjectItem>
		);
	}
);

export default ProjectItem;
