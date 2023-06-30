import {CategoryItem} from "@entities/category";
import {RouteName} from "@shared/constants";
import {Button, InfoItem, List} from "@shared/ui";
import {FC, ReactNode, useMemo} from "react";
import getInfoItems from "../../lib/getInfoItems";
import getTimeInterval from "../../lib/getTimeInterval";
import {Project} from "../../model/types";
import {
	ActionsStyled,
	BodyStyled,
	ContentStyled,
	DateStyled,
	DescriptionStyled,
	FooterStyled,
	HeaderStyled,
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
		() =>
			getInfoItems({workType: project.workType, budget: `$${project.budget}`}),
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
						<List align="center" gap="md" mb="md" noWrap>
							{infoItems.map(item => (
								<InfoItem key={item.id} title={item.title} value={item.value} />
							))}
						</List>
					) : null}
					<DescriptionStyled>{project.description}</DescriptionStyled>
					{project.categories.length !== 0 ? (
						<List align="center" gap="xs" mb="lg">
							{project.categories.map(category => (
								<CategoryItem key={category.id} category={category} />
							))}
						</List>
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
