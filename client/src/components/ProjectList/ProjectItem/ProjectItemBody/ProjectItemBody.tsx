import {CategoryItem, CategoryList} from "@components/CategoryList";
import {InfoItem, InfoList} from "@components/InfoList";
import {Category} from "@customTypes/entities";
import React, {FC, memo} from "react";
import {ProjectItemDesc} from "../ProjectItem.styled";
import StyledProjectItemBody from "./ProjectItemBody.styled";

interface ProjectItemBodyProps {
	infoItems: any[];
	categories: Category[];
	description: string;
}

const ProjectItemBody: FC<ProjectItemBodyProps> = memo(
	({infoItems, categories, description}) => (
		<StyledProjectItemBody>
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
		</StyledProjectItemBody>
	)
);

export default ProjectItemBody;
