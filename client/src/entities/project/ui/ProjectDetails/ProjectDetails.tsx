import {CategoryItem} from "@entities/category";
import {InfoItem, Typography} from "@shared/ui";
import {FC, useMemo} from "react";
import formatDate from "../../lib/formatDate";
import getInfoItems from "../../lib/getInfoItems";
import {Project} from "../../model/types";
import {
	CategoryListStyled,
	FlexContainerStyled,
	InfoListStyled,
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
				<InfoListStyled>
					{infoItems.map(infoItem => (
						<InfoItem
							key={infoItem.id}
							value={infoItem.value}
							title={infoItem.title}
						/>
					))}
				</InfoListStyled>
			</SectionStyled>
			{project.categories.length !== 0 ? (
				<SectionStyled>
					<Typography variant="h5" mb="lg">
						Categories
					</Typography>
					<CategoryListStyled>
						{project.categories.map(category => (
							<li key={category.id}>
								<CategoryItem category={category} />
							</li>
						))}
					</CategoryListStyled>
				</SectionStyled>
			) : null}
			<SectionStyled>
				<FlexContainerStyled>
					<Typography variant="h5">About the client</Typography>
					<p>Member since {formattedDate}</p>
				</FlexContainerStyled>
				<InfoListStyled>
					{creatorInfoItems.map(infoItem => (
						<InfoItem
							key={infoItem.id}
							value={infoItem.value}
							title={infoItem.title}
						/>
					))}
				</InfoListStyled>
			</SectionStyled>
		</ProjectDetailsStyled>
	);
};

export default ProjectDetails;
