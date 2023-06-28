import {CategoryItem} from "@entities/category";
import {InfoItem, List, Typography} from "@shared/ui";
import {FC, useMemo} from "react";
import formatDate from "../../lib/formatDate";
import getInfoItems from "../../lib/getInfoItems";
import {Project} from "../../model/types";
import {
	FlexContainerStyled,
	ProjectDetailsStyled,
	SectionStyled
} from "./ProjectDetails.styled";

interface Props {
	project: Project;
}

const ProjectDetails: FC<Props> = ({project}) => {
	const formattedDate = formatDate(new Date(project.createdDate));
	const infoItems = useMemo(
		() => getInfoItems({workType: project.workType, budget: project.budget}),
		[project.budget, project.workType]
	);
	const creatorInfoItems = useMemo(
		() =>
			getInfoItems({
				// todo: add location for user
				location: "Ukraine"
			}),
		[]
	);

	return (
		<ProjectDetailsStyled>
			<SectionStyled>
				<Typography variant="h1">{project.title}</Typography>
			</SectionStyled>
			<SectionStyled>
				<Typography variant="body1">{project.description}</Typography>
			</SectionStyled>
			<SectionStyled>
				<List>
					{infoItems.map(item => (
						<InfoItem key={item.id} value={item.value} title={item.title} />
					))}
				</List>
			</SectionStyled>
			{project.categories.length !== 0 ? (
				<SectionStyled>
					<Typography variant="h5" mb="lg">
						Categories
					</Typography>
					<List>
						{project.categories.map(category => (
							<CategoryItem key={category.id} category={category} />
						))}
					</List>
				</SectionStyled>
			) : null}
			<SectionStyled>
				<FlexContainerStyled>
					<Typography variant="h5">About the client</Typography>
					<p>Member since {formattedDate}</p>
				</FlexContainerStyled>
				<List>
					{creatorInfoItems.map(item => (
						<InfoItem key={item.id} value={item.value} title={item.title} />
					))}
				</List>
			</SectionStyled>
		</ProjectDetailsStyled>
	);
};

export default ProjectDetails;
