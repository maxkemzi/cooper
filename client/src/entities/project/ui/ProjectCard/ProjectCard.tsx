import {CategoryItem} from "@entities/category";
import {RouteName} from "@shared/constants";
import {Button, InfoItem} from "@shared/ui";
import {FC, ReactNode, useMemo} from "react";
import getInfoItems from "../../lib/getInfoItems";
import getTimeInterval from "../../lib/getTimeInterval";
import {Project} from "../../model/types";
import {
	BodyStyled,
	ActionsStyled,
	CategoryListStyled,
	ContentStyled,
	DateStyled,
	DescriptionStyled,
	FooterStyled,
	HeaderStyled,
	InfoListStyled,
	ProjectCardStyled,
	TitleLinkStyled,
	TypographyStyled
} from "./ProjectCard.styled";

interface Props {
	project: Project;
	topPanelSlot?: ReactNode;
	headerEndSlot?: ReactNode;
	actionsSlot: ReactNode;
}

const ProjectCard: FC<Props> = ({
	project,
	actionsSlot,
	topPanelSlot,
	headerEndSlot
}) => {
	const formattedDate = getTimeInterval(new Date(project.createdDate));
	const infoItems = useMemo(
		() => getInfoItems({workType: project.workType, budget: project.budget}),
		[project.budget, project.workType]
	);

	return (
		<ProjectCardStyled>
			{topPanelSlot}
			<ContentStyled>
				<HeaderStyled>
					<TitleLinkStyled to={`${RouteName.PROJECTS}/${project.id}`}>
						<TypographyStyled variant="h4" noWrap>
							{project.title}
						</TypographyStyled>
					</TitleLinkStyled>
					{headerEndSlot}
				</HeaderStyled>
				<BodyStyled>
					{infoItems.length !== 0 ? (
						<InfoListStyled>
							{infoItems.map(item => (
								<InfoItem key={item.id} title={item.title} value={item.value} />
							))}
						</InfoListStyled>
					) : null}
					<DescriptionStyled>{project.description}</DescriptionStyled>
					{project.categories.length !== 0 ? (
						<CategoryListStyled>
							{project.categories.map(category => (
								<li key={category.id}>
									<CategoryItem category={category} />
								</li>
							))}
						</CategoryListStyled>
					) : null}
				</BodyStyled>
				<FooterStyled>
					<ActionsStyled>
						<Button
							as="routeLink"
							to={`${RouteName.PROJECTS}/${project.id}`}
							size="sm"
						>
							See more
						</Button>
						{actionsSlot}
					</ActionsStyled>
					<DateStyled>{formattedDate}</DateStyled>
				</FooterStyled>
			</ContentStyled>
		</ProjectCardStyled>
	);
};

export default ProjectCard;
