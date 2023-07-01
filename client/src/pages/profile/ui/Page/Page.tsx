import {selectProfile, selectProfileIsFetching} from "@entities/profile";
import {
	ProjectCard,
	ProjectList,
	selectProjects,
	selectProjectsIsFetching,
	selectProjectsTotalCount
} from "@entities/project";
import {AddToFavoritesButton} from "@features/user/addToFavorites";
import {useTypedDispatch, useTypedSelector} from "@shared/model";
import {
	Avatar,
	List,
	Loader,
	StatisticsItem,
	Typography,
	Widget
} from "@shared/ui";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import initializePage from "../../model/initializePage";
import {
	AvatarContentStyled,
	GridContainerStyled,
	InfoContentStyled,
	LocationIconStyled,
	LocationStyled,
	ProjectsContentStyled,
	StatisticsContentStyled
} from "./Page.styled";

const Page = () => {
	const {username} = useParams();
	const dispatch = useTypedDispatch();

	// Selectors
	const isFetching = useTypedSelector(selectProfileIsFetching);
	const profile = useTypedSelector(selectProfile);
	const projects = useTypedSelector(selectProjects);
	const projectsIsFetching = useTypedSelector(selectProjectsIsFetching);
	const totalCount = useTypedSelector(selectProjectsTotalCount);

	useEffect(() => {
		if (username != null) {
			dispatch(initializePage(username));
		}
	}, [dispatch, username]);

	if (isFetching) {
		return <Loader />;
	}

	if (profile === null) {
		// todo: improve logic
		return <div>Something went wrong</div>;
	}

	return (
		<GridContainerStyled>
			<AvatarContentStyled>
				<Avatar size="lg" imagePath={profile.avatar} />
			</AvatarContentStyled>
			<InfoContentStyled>
				<Typography variant="h3" mb="sm">
					{profile.username}
				</Typography>
				<LocationStyled>
					<LocationIconStyled name="location" />
					<Typography>{profile.location || "Unknown location."}</Typography>
				</LocationStyled>
				<Typography>
					{profile.description || "Description is empty."}
				</Typography>
			</InfoContentStyled>
			<StatisticsContentStyled>
				{!projectsIsFetching ? (
					<List gap="md">
						<StatisticsItem title="projects" value={totalCount} />
					</List>
				) : null}
			</StatisticsContentStyled>
			<ProjectsContentStyled>
				<Widget>
					<ProjectList>
						{projects.map(project => (
							<ProjectCard
								key={project.id}
								project={project}
								actionsSlot={<AddToFavoritesButton projectId={project.id} />}
							/>
						))}
					</ProjectList>
				</Widget>
			</ProjectsContentStyled>
		</GridContainerStyled>
	);
};

export default Page;
