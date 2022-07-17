import {CategoryItem, CategoryList} from "@components/CategoryList";
import {InfoItem, InfoList} from "@components/InfoList";
import {Category} from "@customTypes/entities";
import React, {FC} from "react";
import {ProjectItemDesc} from "../ProjectItem.styled";
import StyledProjectItemContent from "./ProjectItemContent.styled";

interface ProjectItemContentProps {
	infoItems: any[];
	categories: Category[];
	description: string;
}

const ProjectItemContent: FC<ProjectItemContentProps> = ({
	infoItems,
	categories,
	description
}) => (
	<StyledProjectItemContent>
		{infoItems.length !== 0 && (
			<InfoList marginBottom="16px">
				{infoItems.map(item => (
					<InfoItem key={item.id} title={item.title} value={item.value} />
				))}
			</InfoList>
		)}
		<ProjectItemDesc>{description}</ProjectItemDesc>
		{categories.length !== 0 && (
			<CategoryList marginBottom="24px">
				{categories.map(category => (
					<CategoryItem key={category._id}>{category.name}</CategoryItem>
				))}
			</CategoryList>
		)}
	</StyledProjectItemContent>
);

export default ProjectItemContent;
