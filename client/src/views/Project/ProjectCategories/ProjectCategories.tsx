import {CategoryItem, CategoryList} from "@components/CategoryList";
import Title from "@components/Title/Title";
import {Category} from "@customTypes/entities";
import useWindowSize from "@hooks/useWindowSize";
import ScreenSizes from "@utils/constants/screenSizes";
import React, {FC} from "react";
import {ProjectPageSection} from "../ProjectPage/ProjectPage.styled";

interface ProjectCategoriesProps {
	categories: Category[];
}

const ProjectCategories: FC<ProjectCategoriesProps> = ({categories}) => {
	const {width} = useWindowSize();
	return (
		<ProjectPageSection>
			<Title marginBottom={width <= ScreenSizes.TabletWidth ? "12px" : "24px"}>
				Categories
			</Title>
			<CategoryList>
				{categories.map(category => (
					<CategoryItem key={category._id}>{category.name}</CategoryItem>
				))}
			</CategoryList>
		</ProjectPageSection>
	);
};

export default ProjectCategories;
