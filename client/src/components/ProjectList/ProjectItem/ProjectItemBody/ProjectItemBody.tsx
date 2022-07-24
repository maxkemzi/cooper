import {CategoryItem, CategoryList} from "@components/CategoryList";
import {InfoItem, InfoList} from "@components/InfoList";
import {Category} from "@customTypes/entities";
import useWindowSize from "@hooks/useWindowSize";
import ScreenSizes from "@utils/constants/screenSizes";
import React, {FC, memo} from "react";
import {ProjectItemDesc} from "../ProjectItem.styled";
import StyledProjectItemBody from "./ProjectItemBody.styled";

interface ProjectItemBodyProps {
	infoItems: any[];
	categories: Category[];
	description: string;
}

const ProjectItemBody: FC<ProjectItemBodyProps> = memo(
	({infoItems, categories, description}) => {
		const {width} = useWindowSize();
		return (
			<StyledProjectItemBody>
				{infoItems.length !== 0 && (
					<InfoList
						marginBottom={width <= ScreenSizes.PhoneWidth ? "12px" : "16px"}
					>
						{infoItems.map(item => (
							<InfoItem key={item.id} title={item.title} value={item.value} />
						))}
					</InfoList>
				)}
				<ProjectItemDesc>{description}</ProjectItemDesc>
				{categories.length !== 0 && (
					<CategoryList
						marginBottom={width <= ScreenSizes.PhoneWidth ? "20px" : "24px"}
					>
						{categories.map(category => (
							<CategoryItem key={category._id}>{category.name}</CategoryItem>
						))}
					</CategoryList>
				)}
			</StyledProjectItemBody>
		);
	}
);

export default ProjectItemBody;
