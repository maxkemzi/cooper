import {IProject} from "@customTypes/index";
import {getInfoItems} from "@utils/helpers/getInfoItems";
import React, {FC} from "react";
import {InfoItem, InfoList} from "../../InfoList";
import {SkillItem, SkillList} from "../../SkillList";
import {ProjectItemDesc, StyledProjectItem} from "./ProjectItem.styled";
import ProjectItemFooter from "./ProjectItemFooter/ProjectItemFooter";
import ProjectItemHeader from "./ProjectItemHeader/ProjectItemHeader";

const ProjectItem: FC<IProject> = ({
	budget,
	creator,
	date,
	description,
	skills,
	title,
	workType,
	_id
}) => {
	const infoList: any[] = getInfoItems({workType, budget});
	return (
		<StyledProjectItem>
			<ProjectItemHeader
				avatar={creator.avatar}
				id={_id}
				title={title}
				username={creator.username}
			/>
			{infoList.length !== 0 && (
				<InfoList marginBottom={16}>
					{infoList.map(item => (
						<InfoItem key={item.id} title={item.title} value={item.value} />
					))}
				</InfoList>
			)}
			<ProjectItemDesc>{description}</ProjectItemDesc>
			{skills.length !== 0 && (
				<SkillList marginBottom={24}>
					{skills.map(skill => (
						<SkillItem key={skill.id}>{skill.name}</SkillItem>
					))}
				</SkillList>
			)}
			<ProjectItemFooter id={_id} date={date} />
		</StyledProjectItem>
	);
};

export default ProjectItem;
